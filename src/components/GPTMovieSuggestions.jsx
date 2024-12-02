import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { gptSearchedMoviesData, gptSearchedMovies } = useSelector(
    (store) => store.gpt
  );
  if (!gptSearchedMovies) return null;
  return (
    <div className="bg-black text-white font-semibold bg-opacity-70 mx-4 overflow-hidden">
      <div>
        {gptSearchedMoviesData.map((movie, index) => (
          <MovieList moviesData={movie} movieTitle={gptSearchedMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
