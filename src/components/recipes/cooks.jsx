import React from 'react';
import WantCooks from './wantCooks';
import CurrentlyCook from './currentlyCook';

const Cooks = ({ wantCook, handleCurrentCook, newArray }) => {
  let totalTime = 0, totalCal = 0;
  newArray.map((cooking) => {
    totalTime += parseInt(cooking.time);
    totalCal += parseInt(cooking.cal);
  });
  return (
    <>
      <div className='card bg-base-100 shadow-xl border border-[#2828281A] items-center w-full'>
        <div className='border-b w-4/5 mt-4 p-2 text-[#282828] text-2xl font-semibold font_lexend mb-4'>
          <h1 className='text-center'>Want to cook: {wantCook.length}</h1>
        </div>
        <WantCooks wantCook={wantCook} handleCurrentCook={handleCurrentCook}></WantCooks>
        <div className='border-b w-4/5 mt-4 p-2 text-[#282828] text-2xl font-semibold font_lexend mb-4'>
          <h1 className='text-center'>Currently cooking: {newArray.length}</h1>
        </div>
        <CurrentlyCook newArray={newArray}></CurrentlyCook>
        <div className='flex w-full pr-5 justify-end gap-x-5 mb-10 text-[#282828CC] font_lexend font-medium'>
          <div>
            <p>Total Time =</p>
            <p>{totalTime} minutes</p>
          </div>
          <div>
            <p>Total Calories =</p>
            <p>{totalCal} calories</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooks;
