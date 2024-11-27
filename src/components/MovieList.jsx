import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData, movieTitle }) => {
  console.log(moviesData);
  if (!moviesData) return;
  return (
    <div className="w-screen p-5 overflow-hidden">
      <h1 className="text-2xl">{movieTitle}</h1>
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
