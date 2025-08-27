import React, { useRef, useState } from "react";
import { checkCredentials } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUserData } from "../utils/appStoreSlices/userDataSlice";
import { PHOTO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { toggleGuestMode } from "../utils/appStoreSlices/appConfig";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [validateMsg, setValidateMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    const message = checkCredentials(
      email.current.value,
      password.current.value
    );

    setValidateMsg(message);
    if (!isSignInForm && message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: PHOTO_URL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUserData({
                  Uid: uid,
                  Email: email,
                  DisplayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMsg("User registration failed ! Please Try again.");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Sign in tried !")
          setValidateMsg("Sign in Credentials are wrong !");
        });
    }
  };

  const handleAnonymousSignIn = () => {
    signInAnonymously(auth)
  .then(() => {
    navigate("/browse")
    dispatch(toggleGuestMode());
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  }

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <div className="bg-black h-[38rem] md:w-[30rem] w-[20rem] mx-auto mt-2 bg-opacity-70">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white font-bold md:text-4xl text-2xl md:pl-20 pl-12 md:mb-6 mb-4 md:pt-14 pt-7">
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              name="name"
              className="w-2/3 md:p-4 px-4 py-2 md:ml-20 ml-12 rounded-sm my-2 bg-gray-500 bg-opacity-40 text-white md:text-base text-sm"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            type="email"
            name="email"
            className="w-2/3 md:p-4 px-4 py-2 md:ml-20 ml-12 rounded-sm my-2 bg-gray-500 bg-opacity-40 text-white md:text-base text-sm"
            placeholder="Email"
          />
          <input
            ref={password}
            type="password"
            name="password"
            className="w-2/3 md:p-4 px-4 py-2 md:ml-20 ml-12 rounded-sm my-2 bg-gray-500 bg-opacity-40 text-white md:text-base text-sm"
            placeholder="Password"
          />
        </form>
        <p className="text-red-600 font-semibold ml-20 mt-2">{validateMsg}</p>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white w-2/3 px-4 py-2 font-semibold md:ml-20 ml-12 rounded-sm my-2 md:text-base text-sm"
          onClick={handleSignIn}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        {isSignInForm && <p className="text-center text-gray-300 my-2 md:text-base text-sm">OR</p>}
        {isSignInForm && (
          <button className="bg-white text-red-600 hover:text-red-700 hover:bg-opacity-95 w-2/3 px-4 py-2 font-semibold md:ml-20 ml-12 rounded-sm my-2 md:text-base text-sm" onClick={handleAnonymousSignIn}>
            Guest Mode
          </button>
        )}
        {isSignInForm && (
          <p className="text-center text-white m-3 md:text-base text-sm">Forgot password?</p>
        )}
        {isSignInForm ? (
          <p className="text-gray-300 text-center mt-2">
            New to Netflix?{" "}
            <span
              className="font-semibold text-white hover:underline cursor-pointer md:text-base text-sm"
              onClick={toggleSignIn}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-300 text-center mt-2">
            Already a user?{" "}
            <span
              className="font-semibold text-white hover:underline cursor-pointer md:text-base text-sm"
              onClick={toggleSignIn}
            >
              Sign in now.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
