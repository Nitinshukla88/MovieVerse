import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { gptSearchedMoviesData, gptSearchedMovies } = useSelector(
    (store) => store.gpt
  );
  if (!gptSearchedMovies) return null;
  console.log(gptSearchedMoviesData);
  return (
    <div className="bg-black text-white font-semibold bg-opacity-70 mx-4 overflow-hidden">
      <div>
        {gptSearchedMoviesData.map((movie, index) => {
          if(movie.length === 0) return null;
          return <MovieList moviesData={movie} movieTitle={gptSearchedMovies[index]} key={index}/>
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
