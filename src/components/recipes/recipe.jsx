import times from '../../image/time.png'
import flame from '../../image/flame.png'

const Recipe = ({recipe}) => {
  const {name, img, desc, ing, time, cal} = recipe;
  return (
    <>
      <div className="card lg:w-full bg-base-100 shadow-xl border border-[#2828281A]">
        <figure className="px-6 pt-6">
          <img src={img} alt={name} className="rounded-xl max-h-52 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="font_lexend text-xl font-semibold">{name}</h2>
          <p className="mb-4 text-[#878787] font_fira-sans">{desc}</p>
          <hr />
          <h3 className="mt-6 mb-2 text-[#282828] text-lg font-medium font_lexend">Ingredients: {ing.length}</h3>
          <ul className="list-disc pl-6 mb-4 text-[#878787] text-lg">
            {
              ing.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))
            }
          </ul>
          <hr />
          <div className='flex gap-4 font_fira-sans text-[#282828CC] text-xs md:text-base mt-6'>
            <div className="flex gap-2  items-center"><img src={times} alt="" />
            <span>30 minutes</span>
            </div>
            <div className="flex gap-2  items-center">
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
