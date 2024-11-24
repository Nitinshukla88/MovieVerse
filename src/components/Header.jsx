import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUserData, userSignedIn } from "../utils/appStoreSlices/userDataSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {user, isSignedIn} = useSelector((store) => store.user);
  // const { DisplayName, Email, Uid } = user;
  // console.log(DisplayName, Email, Uid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUserData());
        dispatch(userSignedIn(false));
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-gradient-to-b from-black flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-20 w-48 ml-28"
      />
      {isSignedIn && user && (
        <div className="flex">
          <img
            // src="https://avatars.githubusercontent.com/u/143546627?v=4"
            src={user.photoURL}
            alt="user-img"
            className="h-10 w-10 rounded-full mt-4"
          />
          <button className="bg-red-600 text-white font-bold px-3 h-12 m-3">Welcome {user.DisplayName}</button>
          <button
            className="bg-red-600 text-white font-bold px-3 h-12 m-3"
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
