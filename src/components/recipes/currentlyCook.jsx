
const CurrentlyCook = () => {
  return (
    <>
        <div className="overflow-x-auto w-full mb-4">
        <table className="table text-[rgba(40,40,40,0.7)] font_fira-sans text-xs md:text-base">
    {/* head */}
    <thead className="text-[#878787] font-medium">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}

export default CurrentlyCook