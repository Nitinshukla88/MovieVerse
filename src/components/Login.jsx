import React, { useRef, useState } from "react";
import { checkCredentials } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

  const[isSignInForm, setisSignInForm] = useState(true);
  const [validateMsg, setValidateMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {

    const message = checkCredentials(email.current.value, password.current.value);

    setValidateMsg(message);
    if(message) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidateMsg(errorCode+"-"+errorMessage);
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidateMsg("User not found");
  });
    }
  }

  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  }
  return (
    <div className="">
      <div className="bg-black h-[38rem] w-[30rem] mx-auto mt-2 bg-opacity-70">
        <form action="" onSubmit={(e)=> e.preventDefault()}>
          <h1 className="text-white font-bold text-4xl pl-20 mb-6 pt-14">
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            name="name"
            className="w-2/3 p-4 ml-20 rounded-sm my-2 bg-gray-500 bg-opacity-40 text-white"
            placeholder="Full Name"
          />}
          <input
          ref={email}
            type="email"
            name="email"
            className="w-2/3 p-4 ml-20 rounded-sm my-2 bg-gray-500 bg-opacity-40 text-white"
            placeholder="Email"
          />
          <input
          ref={password}
            type="password"
            name="password"
            className="w-2/3 p-4 ml-20 rounded-sm my-2 bg-gray-500 text-white bg-opacity-40"
            placeholder="Password"
          />
        </form>
        <p className="text-red-600 font-semibold ml-20 mt-2">{validateMsg}</p>
        <button type="submit" className="bg-red-600 text-white w-2/3 px-4 py-2 font-semibold ml-20 rounded-sm my-2 " onClick={handleSignIn}>
        {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        {isSignInForm && <p className="text-center text-gray-300 my-2">OR</p>}
        {isSignInForm && <button className="bg-gray-500 bg-opacity-40 text-white w-2/3 px-4 py-2 font-semibold ml-20 rounded-sm my-2 ">Use a sign-in-code</button>}
        {isSignInForm && <p className="text-center text-white m-3">Forgot password?</p>}
        {isSignInForm ? (<p className="text-gray-300 ml-20 mt-2">New to Netflix? <span className="font-semibold text-white hover:underline cursor-pointer" onClick={toggleSignIn}>Sign up now.</span></p>) : (<p className="text-gray-300 ml-20 mt-2">Already a user? <span className="font-semibold text-white hover:underline cursor-pointer" onClick={toggleSignIn}>Sign in now.</span></p>)} 
      </div>
    </div>
  );
};

export default Login;
