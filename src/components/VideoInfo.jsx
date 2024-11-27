import React from "react";

const VideoInfo = ({ movie }) => {
  const { original_title, overview } = movie;
  return (
    <div className="absolute py-40 text-white bg-gradient-to-r from-black top-0 left-0 w-screen aspect-video">
      <div className="px-28 py-4 w-2/4">
        <p className="text-4xl font-bold m-4">{original_title}</p>
        <p className="mx-4">{overview}</p>
      </div>
      <div className="px-28">
        <button className="px-6 py-3 m-4 text-black bg-white rounded-md hover:bg-opacity-80">
          Play▶️
        </button>
        <button className="bg-gray-200 px-4 py-3 text-white rounded-md bg-opacity-20">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
