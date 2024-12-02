import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_IMAGE_URL } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 top-0 left-0 md:h-0 h-screen'>
        <img src={BG_IMAGE_URL} className='md:h-auto h-screen object-cover'/>
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch