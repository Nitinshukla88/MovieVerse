import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IFRAME_URL, OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailers } from "../utils/appStoreSlices/moviesDataSlice";

const MoviePage = () => {
  const { id } = useParams();
  const movieTrailers = useSelector((store) => store.movies.movieTrailerVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    !movieTrailers?.[id] && getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    const fetchData = json?.results.filter((video) => video.type === "Trailer");

    const movieTrailer = fetchData.length > 0 ? fetchData[0] : json?.results[0];
    dispatch(addMovieTrailers({ id: id, key: movieTrailer?.key }));
  };


  return (
    <div className="w-screen bg-black overflow-hidden">
      <div className="h-16 flex justify-end items-center bg-red-700"><Link to="/browse"><button className="px-3 py-2 mx-3 my-3 bg-black text-white rounded-md hover:bg-white hover:text-red-700 hover:font-semibold">HomePage</button></Link></div>
      <iframe
        className="w-screen h-screen absolute top-0 left-0 -z-10"
        src={IFRAME_URL + movieTrailers?.[id] + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MoviePage;
