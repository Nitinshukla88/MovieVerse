import React from "react";
import { IFRAME_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useGetMovieVideo from "../hooks/useGetMovieVideo";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store)=> store.movies?.trailerVideo);
  useGetMovieVideo(movieId);

  return (
    <div className="w-screen bg-gradient-to-r from-black">
      <iframe
        className="w-screen aspect-video -mt-10"
        src={IFRAME_URL+movieTrailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
