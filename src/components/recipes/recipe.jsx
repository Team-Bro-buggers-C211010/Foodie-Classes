import time from '../../image/time.png'
import flame from '../../image/flame.png'
const Recipe = () => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl border border-[#2828281A]">
        <figure className="px-6 pt-6">
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="font_lexend text-xl font-semibold">Spaghetti Bolognese</h2>
          <p className="mb-4 text-[#878787] font_fira-sans">Classic Italian pasta dish with savory meat sauce.</p>
          <hr />
          <h3 className="mt-6 mb-2 text-[#282828] text-lg font-medium font_lexend">Ingredients: 6</h3>
          <ul className="list-disc pl-6 mb-4 text-[#878787] text-lg">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
          <hr />
          <div className='flex gap-4 font_fira-sans text-[#282828CC] mt-6'>
            <div className="flex gap-2"><img src={time} alt="" />
            <span>30 minutes</span>
            </div>
            <div className="flex gap-2">
            <img src={flame} alt="" />
            <span>600 calories</span>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button className="btn border-0 bg-[#0BE58A] px-6 rounded-full text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe