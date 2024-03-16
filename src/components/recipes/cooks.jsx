import React from 'react'
import WantCooks from './wantCooks'
import CurrentlyCook from './currentlyCook'

const Cooks = () => {
  return (
    <>
      <div className='card bg-base-100 shadow-xl border border-[#2828281A] items-center w-full'>
        <div className='border-b w-4/5 mt-4 p-2 text-[#282828] text-2xl font-semibold font_lexend mb-4'>
          <h1 className='text-center'>Want to cook: 01</h1>
        </div>
        <WantCooks></WantCooks>
        <div className='border-b w-4/5 mt-4 p-2 text-[#282828] text-2xl font-semibold font_lexend mb-4'>
          <h1 className='text-center'>Currently cooking: 02</h1>
        </div>
        <CurrentlyCook></CurrentlyCook>
        <div className='flex w-full pr-5 justify-end gap-x-5 mb-10 text-[#282828CC] font_lexend font-medium'><div>
            <p>Total Time =</p>
            <p>45 minutes</p>
          </div>
          <div>
          <p>Total Calories =</p>
            <p>1050 calories</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cooks