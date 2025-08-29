import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  IFRAME_URL,
  OPTIONS,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailers } from "../utils/appStoreSlices/moviesDataSlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const MoviePage = () => {
  const { id } = useParams();
  const movieTrailers = useSelector((store) => store.movies.movieTrailerVideos);
  const dispatch = useDispatch();
  const { t } = useTranslation();
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

  const handleLangChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className="w-screen bg-black overflow-hidden">
      <div className="h-16 flex justify-end items-center bg-red-700">
        <h1 className="text-white font-bold md:text-5xl text-2xl md:ml-20 mx-auto">
          {t("Title")}
        </h1>
        <div className="flex justify-center items-center">
          <select
            className="md:h-10 mt-0 md:mx-2 mx-1 md:p-2 rounded-sm h-4 p-0 w-9 md:w-24 md:text-sm text-[0.3rem]"
            onChange={handleLangChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang?.identifier} key={lang?.identifier}>
                {lang?.name}
              </option>
            ))}
          </select>
          <Link to="/browse">
            <button className="px-3 py-2 mx-3 my-3 bg-black text-white rounded-md hover:bg-white hover:text-red-700 hover:font-semibold">
              {t("HomePage")}
            </button>
          </Link>
        </div>
      </div>
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
