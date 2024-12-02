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
import { toggleGPTPage } from "../utils/appStoreSlices/gptSlice";
import { changeLanguage } from "../utils/appStoreSlices/appConfig";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGPTSearchPagePresent = useSelector(store=> store.gpt.showGPTPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
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
      <img src={LOGO} alt="logo" className="md:h-20 md:w-48 md:ml-28 mx-auto h-16 w-32" />
      {user && (
        <div className="flex">
          <img
            src={user?.photoURL}
            alt="user-img"
            className="h-10 w-10 mt-4 rounded-sm"
          />
          {isGPTSearchPagePresent && <select className="h-10 mt-4 ml-3 p-2 rounded-sm" onChange={handleLangChange}> 
            {SUPPORTED_LANGUAGES.map(lang=> <option value={lang?.identifier} key={lang?.identifier}>{lang?.name}</option>)}  
          </select>}
          <button className="bg-purple-700 rounded-sm font-semibold text-white px-3 ml-3 my-4 h-10" onClick={handleToggleGPTPage}>{isGPTSearchPagePresent ? "HomePage" : "Try NetFlix-GPT"}</button>
          <button className="bg-red-600 text-white rounded-sm font-bold px-3 h-10 ml-3 my-4">
            Welcome {user?.DisplayName}
          </button>
          <button
            className="bg-red-600 text-white rounded-sm font-bold px-3 h-10 mx-3 my-4"
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
