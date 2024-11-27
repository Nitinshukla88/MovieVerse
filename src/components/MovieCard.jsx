import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({movieData}) => {
  return (
    <div>
        <div className='w-40'>
        <img alt="movie-card" src={POSTER_URL+movieData?.poster_path}/>
        </div>
    </div>
  )
}

export default MovieCard