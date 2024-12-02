import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ movieData }) => {
  return (
    movieData?.poster_path &&<div>
      <div className="md:w-40 w-28">
        <img alt="movie-card" src={POSTER_URL + movieData?.poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
