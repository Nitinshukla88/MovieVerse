import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addGPTSearchMovies } from "../utils/appStoreSlices/gptSlice";
import Groq from "groq-sdk";

const GPTSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const getGPTSearchedMovies = async(movie) => {
    const movieData = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", OPTIONS);
    const jsonData = await movieData.json();
    return jsonData.results;
  }

  const handleGPTSearchClick = async () => {
    const groq = new Groq({apiKey : process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true});
    const prompt = `Give me 5 movie names in the form of string seperated by comma according to the prompt given ahead. Don't give any other text expect movie names. The prompt is - ${searchText.current.value}`;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-70b-8192",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    let fullResponse = "";
    for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content || "";
      fullResponse += content;
    }

    const GPTdata = fullResponse.split(","); 

    const searchedMovieResults = GPTdata.map(movie=> getGPTSearchedMovies(movie));
    const extractedMovieData = await Promise.all(searchedMovieResults);
    dispatch(addGPTSearchMovies({GPTMovies : GPTdata, GPTMoviesData : extractedMovieData}));
  };

  return (
    <div className="flex justify-center">
      <form
        action=""
        className="md:py-10 py-4 flex justify-center md:w-1/2 w-4/5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langkey].GPTSearchPlaceholder}
          className="px-3 md:px-6 text-xs md:text-base md:py-3 border-2 w-4/5"
          ref={searchText}
        />
        <button
          className="px-2 md:px-3 md:text-base text-xs py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-sm mx-3 font-semibold"
          onClick={handleGPTSearchClick}
        >
          {lang[langkey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
