import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  addUserData,
  removeUserData,
} from "../utils/appStoreSlices/userDataSlice";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeGPTSearchedMovies, toggleGPTPage } from "../utils/appStoreSlices/gptSlice";
import { changeLanguage } from "../utils/appStoreSlices/appConfig";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGPTSearchPagePresent = useSelector(store=> store.gpt.showGPTPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        isGPTSearchPagePresent && dispatch(toggleGPTPage());
        dispatch(removeGPTSearchedMovies());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUserData({
            Uid: uid,
            Email: email,
            DisplayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUserData());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleToggleGPTPage = () => {
    dispatch(toggleGPTPage());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between">
      <img src={LOGO} alt="logo" className="md:h-20 md:w-48 md:ml-28 mx-auto h-14 w-28" />
      {user && (
        <div className="flex justify-center">
          {isGPTSearchPagePresent && <select className="md:h-10 md:mt-4 mt-0 ml-3 md:p-2 rounded-sm h-4 p-0 w-9 md:w-24 md:text-sm text-[0.3rem]" onChange={handleLangChange}> 
            {SUPPORTED_LANGUAGES.map(lang=> <option value={lang?.identifier} key={lang?.identifier}>{lang?.name}</option>)}  
          </select>}
          <button className="bg-purple-700 rounded-sm font-semibold text-white md:px-3 ml-3 md:my-4 my-0 md:h-10 h-4 text-[0.3rem] md:text-base px-1" onClick={handleToggleGPTPage}>{isGPTSearchPagePresent ? "HomePage" : "Try NetFlix-GPT"}</button>
          <button className="bg-red-600 text-white rounded-sm font-semibold px-3 md:h-10 ml-3 md:my-4 my-0 h-4 md:text-base text-[0.3rem]">
            Welcome {user?.DisplayName}
          </button>
          <img
            src={user?.photoURL}
            alt="user-img"
            className="md:h-10 md:w-10 md:mt-4 mt-0 rounded-sm h-4 w-4 ml-3"
          />
          <button
            className="bg-red-600 text-white rounded-sm font-semibold px-3 md:h-10 mx-3 md:my-4 my-0 h-4 md:text-base text-[0.3rem]"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
