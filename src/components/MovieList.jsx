import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ moviesData, movieTitle }) => {
  if (!moviesData) return;
  return (
    <div className="w-screen md:px-8 md:py-2 py-0 px-4 overflow-x-hidden">
      <h1 className="md:text-2xl text-[0.5rem] md:my-3 my-2 font-semibold">{movieTitle}</h1>
      <div className="w-screen">
        <div className="flex space-x-4 overflow-x-scroll w-screen">
          {moviesData.map((movie) => (
            <Link to={"/browse/Movie/"+movie?.id} key={movie?.id}><MovieCard movieData={movie} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
