import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ movieData }) => {
  return (
    movieData?.poster_path &&<div>
      <div className="md:w-40 w-20 hover:cursor-pointer hover:border-4 hover:border-gray-300 hover:rounded-lg">
        <img alt="movie-card" src={POSTER_URL + movieData?.poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
