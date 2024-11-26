import React from 'react'
import Header from './Header'
import useGetMovieData from '../hooks/useGetMovieData'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useGetMovieData(); // custom hook for making code clean

  return (
    <div>
      <Header/>
      <div className='absolute top-0 left-0 -z-10'>
      <MainContainer/>
      <SecondaryContainer/>
      </div>

    </div>
  )
}

export default Browse