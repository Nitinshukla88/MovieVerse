import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI';

const GPTSearchBar = () => {

  const langkey = useSelector(store=> store.config.lang);
  const searchText = useRef(null);

  const handleGPTSearchClick = async() => {
    // console.log(searchText.current.value);
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(chatCompletion.choices)
    
  }

  return (
    <div className='flex justify-center'>
        <form action='' className='py-10 flex justify-center w-1/2'onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder={lang[langkey].GPTSearchPlaceholder}  className='px-6 py-3 border-2 w-4/5' ref={searchText}/>
            <button className='px-3 py-2 bg-purple-600 text-white rounded-sm mx-3 font-semibold' onClick={handleGPTSearchClick}>{lang[langkey].Search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar