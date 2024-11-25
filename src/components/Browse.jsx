import React, { useEffect } from 'react'
import Header from './Header'
import { OPTIONS } from '../utils/constants'

const Browse = () => {

  const getMovies = async ()=> {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
    const movieData = await data.json();
    console.log(movieData);
  }

  useEffect(()=> {
    getMovies();
  }, []);

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse