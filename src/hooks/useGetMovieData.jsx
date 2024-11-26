import { useDispatch } from "react-redux";
import { addMovieData } from "../utils/appStoreSlices/moviesDataSlice";
import { useEffect } from "react";
import { MOVIE_API, OPTIONS } from "../utils/constants";

const useGetMovieData = () => {
    const dispatch = useDispatch();

  const getMovies = async ()=> {
    const data = await fetch(MOVIE_API, OPTIONS);
    const movieData = await data.json();

    dispatch(addMovieData(movieData.results));

  }

  useEffect(()=> {
    getMovies();
  }, []);
}

export default useGetMovieData;