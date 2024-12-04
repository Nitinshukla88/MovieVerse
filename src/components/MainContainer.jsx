import React from "react";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movies.movielist);
  if (movieData === null) return;
  const movie = movieData[0][0];
  const { id } = movie;
  return (
    <div>
      <VideoInfo movie={movie} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
