import { useEffect, useState } from 'react'
import Cooks from './cooks'
import Recipe from './recipe'

const Recipes = ({newArray,handleWantToCook,wantCook,handleCurrentCook}) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('/recipe.json')
      .then((res) => res.json())
      .then((data) => setCarts(data))
  }, [])
  return (
    <section>
      <div className='container mx-auto flex flex-col lg:flex-row w-full items-start gap-10 md:gap-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
          {carts.map((recipe) => (
            <Recipe handleWantToCook={handleWantToCook} key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <Cooks wantCook={wantCook} newArray={newArray} handleCurrentCook={handleCurrentCook}></Cooks>
      </div>
    </section>
  )
}

export default Recipes