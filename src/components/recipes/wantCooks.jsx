import React from 'react'

const WantCooks = () => {
  return (
    <>
      <div className="overflow-x-auto w-full">
  <table className="table text-[#282828B2] font_fira-sans mb-4 text-xs md:text-base">
    {/* head */}
    <thead className='text-[#878787] font-medium'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td><button className='btn border-0 bg-[#0BE58A] rounded-full px-2 md:px-4 py-1 md:py-2 text-[#150B2B] font_lexend font-medium'>Preparing</button></td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}

export default WantCooks