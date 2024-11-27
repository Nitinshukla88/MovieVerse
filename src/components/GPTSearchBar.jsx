import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='flex justify-center'>
        <form action='' className='py-10 flex justify-center w-1/2'>
            <input type="text" placeholder='what do you want to see today?'  className='px-6 py-3 border-2 w-4/5'/>
            <button className='px-3 py-2 bg-purple-600 text-white rounded-sm mx-3 font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar