import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import { BG_IMAGE_URL } from "../utils/constants";

const Body = () => {
  return (
    <div>
      <Header />
      <img
        src={BG_IMAGE_URL}
        alt="bg-imgae"
        className="absolute top-0 left-0 -z-20 bg w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <Login />
    </div>
  );
};

export default Body;
