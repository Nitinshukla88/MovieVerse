import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_IMAGE_URL } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 top-0 left-0'>
        <img src={BG_IMAGE_URL}/>
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch