import React, { useEffect } from "react";
import Header from "./Header";
import useGetMovieData from "../hooks/useGetMovieData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { toggleGuestMode } from "../utils/appStoreSlices/appConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const toggleGPTPage = useSelector((store) => store.gpt.showGPTPage);
  const isguestMode = useSelector((store) => store.config.isGuestMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useGetMovieData(); // custom hook for making code clean

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isguestMode) {
        event.preventDefault();
        signOut(auth)
          .then(() => {
            isguestMode && dispatch(toggleGuestMode());
            navigate("/");
          })
          .catch((error) => {
            // An error happened.
          });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isguestMode]);
  return (
    <div>
      <Header />
      {toggleGPTPage ? (
        <GPTSearchPage />
      ) : (
        <div className="absolute top-0 left-0 -z-10">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
