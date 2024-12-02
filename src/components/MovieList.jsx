import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData, movieTitle }) => {
  if (!moviesData) return;
  return (
    <div className="w-screen md:px-8 md:py-2 py-0 px-4 overflow-x-hidden">
      <h1 className="md:text-2xl text-xs my-3 font-semibold">{movieTitle}</h1>
      <div className="w-screen">
        <div className="flex space-x-4 overflow-x-scroll w-screen">
          {moviesData.map((movie) => (
            <MovieCard movieData={movie} key={movie?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
