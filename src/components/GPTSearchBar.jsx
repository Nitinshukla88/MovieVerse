import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { OPTIONS } from "../utils/constants";
import { addGPTSearchMovies } from "../utils/appStoreSlices/gptSlice";

const GPTSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const getGPTSearchedMovies = async(movie) => {
    const movieData = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", OPTIONS);
    const jsonData = await movieData.json();
    return jsonData;
  }

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion.choices)

    {
      /**
      here above is the logic to fetch the data from Open-ai API key and until we will not get the actual API key, let assume the data we get is ['Andaz apna apna', 'Golmaal', 'hera pheri', 'dhamaal', 'grand masti']
       **/
    }

    const GPTdata = ['Andaz apna apna', 'Golmaal', 'Hera pheri', 'Dhamaal', 'Grand masti'];  // We are hardcoding this just for now.

    const searchedMovieResults = GPTdata.map(movie=> getGPTSearchedMovies(movie));
    const extractedMovieData = await Promise.all(searchedMovieResults);
    dispatch(addGPTSearchMovies(extractedMovieData));
  };

  return (
    <div className="flex justify-center">
      <form
        action=""
        className="py-10 flex justify-center w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langkey].GPTSearchPlaceholder}
          className="px-6 py-3 border-2 w-4/5"
          ref={searchText}
        />
        <button
          className="px-3 py-2 bg-purple-600 text-white rounded-sm mx-3 font-semibold"
          onClick={handleGPTSearchClick}
        >
          {lang[langkey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
