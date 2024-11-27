import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector(store=>store?.movies?.movielist);
  return (
    <div className='bg-black text-white'>
      <div className='relative -mt-96'>
      <MovieList moviesData={moviesList} movieTitle={"Now Playing Movies"}/>
      <MovieList moviesData={moviesList} movieTitle={"Trending Movies"}/>
      <MovieList moviesData={moviesList} movieTitle={"Popular Movies"}/>
      <MovieList moviesData={moviesList} movieTitle={"Top rated Movies"}/>
      </div>
    </div>
  )
}

export default SecondaryContainer