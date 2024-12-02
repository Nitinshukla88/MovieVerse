import { useDispatch, useSelector } from "react-redux";
import { addMovieData } from "../utils/appStoreSlices/moviesDataSlice";
import { useEffect } from "react";
import { MOVIE_API, OPTIONS } from "../utils/constants";

const useGetMovieData = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector((store) => store.movies.movielist);

  const getMovies = async () => {
    const data = await fetch(MOVIE_API, OPTIONS);
    const movieData = await data.json();

    dispatch(addMovieData(movieData.results));
  };

  useEffect(() => {
    !moviesData && getMovies();
  }, []);
};

export default useGetMovieData;
