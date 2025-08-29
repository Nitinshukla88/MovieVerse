import { useRef, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = async () => {
  const message = checkCredentials(
    email.current.value,
    password.current.value
  );
  setValidateMsg(message);
  if (message) return;

  setLoading(true);

  try {
    if (!isSignInForm) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      console.log(userCredential);
      
      await updateProfile(auth.currentUser, {
        displayName: name.current.value,
        photoURL: PHOTO_URL,
      });

      const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUserData({
          Uid: uid,
          Email: userEmail,
          DisplayName: displayName,
          photoURL: photoURL,
        })
      );

    } else {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
    }
  } catch (error) {
    console.error("Authentication Error:", error);
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
        setValidateMsg("This email is already registered. Please sign in.");
    } else if (errorCode === 'auth/invalid-credential') {
        setValidateMsg("Incorrect email or password. Please try again.");
    } else {
        setValidateMsg("Authentication failed. Please try again later.");
    }
  } finally {
    setLoading(false);
  }
};

  const handleAnonymousSignIn = async () => {
    setGuestLoading(true);
  try {
    await signInAnonymously(auth);
    navigate("/browse");
    dispatch(toggleGuestMode());

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Anonymous Sign-In Failed:", errorCode, errorMessage);
  } finally {
    setGuestLoading(false);
  }
};

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
          className="bg-red-600 hover:bg-red-700 text-white w-2/3 px-4 py-2 font-semibold md:ml-20 ml-12 rounded-sm my-2 md:text-base text-sm flex justify-center items-center disabled:opacity-75"
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isSignInForm ? (
              "Sign in"
            ) : (
              "Sign up"
            )}
        </button>
        {isSignInForm && <p className="text-center text-gray-300 my-2 md:text-base text-sm">OR</p>}
        {isSignInForm && (
          <button className="bg-white text-red-600 hover:text-red-700 hover:bg-opacity-95 w-2/3 px-4 py-2 font-semibold md:ml-20 ml-12 rounded-sm my-2 md:text-base text-sm flex justify-center items-center disabled:opacity-75" onClick={handleAnonymousSignIn} disabled={guestLoading}>
            {guestLoading ? (
              <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Guest Mode"
            )}
          </button>
        )}
        {isSignInForm && (
          <p className="text-center text-white m-3 md:text-base text-sm">Forgot password?</p>
        )}
        {isSignInForm ? (
          <p className="text-gray-300 text-center mt-2">
            New to MovieVerse?{" "}
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
