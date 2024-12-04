import { useDispatch, useSelector } from "react-redux";
import { addMovieData } from "../utils/appStoreSlices/moviesDataSlice";
import { useEffect } from "react";
import { ALL_MOVIE_API, OPTIONS } from "../utils/constants";

const useGetMovieData = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector((store) => store.movies.movielist);

  const getMovies = async () => {
    const data = ALL_MOVIE_API.map(async(API) => {
      const data = await fetch(API, OPTIONS);
      const json = await data.json();
      return json.results;
    } );
    const moviedata = await Promise.all(data);
    dispatch(addMovieData(moviedata));
  };

  useEffect(() => {
    !moviesData && getMovies();
  }, []);
};

export default useGetMovieData;
