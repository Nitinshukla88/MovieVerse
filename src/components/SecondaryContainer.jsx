import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { MOVIE_GENERES } from "../utils/constants";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store?.movies?.movielist);
  if(!moviesList) return;
  return (
    <div className="bg-black text-white">
      <div className="relative md:-mt-96 -mt-14">
        {moviesList.map((moviesCollection, index) => <MovieList moviesData={moviesCollection} movieTitle={MOVIE_GENERES[index]} key={index}/>)}
      </div>
    </div>
  );
};

export default SecondaryContainer;
