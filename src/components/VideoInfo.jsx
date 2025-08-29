import React from "react";
import { useTranslation } from "react-i18next";

const VideoInfo = ({ movie }) => {
  const { t } = useTranslation();
  const { original_title, overview } = movie;
  return (
    <div className="absolute md:py-40 py-12 text-white bg-gradient-to-r from-black top-0 left-0 w-screen aspect-video">
      <div className="md:px-28 px-10 md:py-4 md:w-2/4 w-5/6">
        <p className="md:text-4xl text-md py-1 font-bold md:m-4 mx-3 md:mt-2 mt-0 ">{original_title}</p>
        <p className="md:mx-4 mx-3 md:text-base text-[0.3rem]">{overview}</p>
      </div>
      <div className="md:px-28 pl-8 flex md:pt-0 pt-1">
        <button className="md:px-6 md:py-3 md:m-4 text-black bg-white rounded-md hover:bg-opacity-80 px-1 py-0.5 md:text-base text-[0.3rem] ml-5">
          {`${t("Play")}`}▶️
        </button>
        <button className="bg-gray-200 md:px-4 px-1 md:m-4 md:py-3 py-0.5 text-white rounded-md bg-opacity-20 md:text-base text-[0.3rem] mx-1">
          {`${t("MoreInfo")}`}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
