import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="bg-black h-[38rem] w-[30rem] mx-auto mt-2 bg-opacity-70">
        <form action="">
          <h1 className="text-white font-bold text-4xl pl-20 mb-6 pt-14">
            Sign in
          </h1>
          <input
            type="email"
            name="email"
            className="w-2/3 p-4 ml-20 rounded-sm my-2 bg-gray-500 bg-opacity-40"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="w-2/3 p-4 ml-20 rounded-sm my-2 bg-gray-500 bg-opacity-40"
            placeholder="Password"
          />
        </form>
        <button type="submit" className="bg-red-600 text-white w-2/3 px-4 py-2 font-semibold ml-20 rounded-sm my-2 ">
          Sign in
        </button>
        <p className="text-center text-gray-300 my-2">OR</p>
        <button className="bg-gray-500 bg-opacity-40 text-white w-2/3 px-4 py-2 font-semibold ml-20 rounded-sm my-2 ">Use a sign-in-code</button>
        <p className="text-center text-white m-3">Forgot password?</p>
        <p className="text-gray-300 ml-20 mt-2">New to Netflix? <span className="font-semibold text-white">Sign up now.</span></p>
      </div>
    </div>
  );
};

export default Login;
