import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addMovieVideo } from "../utils/appStoreSlices/moviesDataSlice";
import { useEffect } from "react";

const useGetMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const getVideosData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        OPTIONS
      );
      const json = await data.json();
      const fetchData = json?.results.filter((video) => video.type == "Trailer");
  
      const movieTrailer = fetchData.length > 0 ? fetchData[0] : json?.results[0];
      dispatch(addMovieVideo(movieTrailer));
  
    };
  
    useEffect(() => {
      getVideosData();
    }, []);
}

export default useGetMovieVideo;