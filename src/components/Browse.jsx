import React from "react";
import Header from "./Header";
import useGetMovieData from "../hooks/useGetMovieData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleGPTPage = useSelector((store) => store.gpt.showGPTPage);
  useGetMovieData(); // custom hook for making code clean

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
