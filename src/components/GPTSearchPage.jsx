import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_IMAGE_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 top-0 left-0'>
        <img src={BG_IMAGE_URL}/>
      </div>
      <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch