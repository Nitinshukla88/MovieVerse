import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData, movieTitle }) => {
  if (!moviesData) return;
  return (
    <div className="w-screen px-8 py-2 overflow-hidden">
      <h1 className="text-2xl my-3 font-semibold">{movieTitle}</h1>
      <div className="w-screen overflow-x-hidden">
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
