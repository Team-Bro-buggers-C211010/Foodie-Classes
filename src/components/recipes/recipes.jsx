import { useEffect, useState } from 'react'
import Cooks from './cooks'
import Recipe from './recipe'

const Recipes = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('/recipe.json')
      .then((res) => res.json())
      .then((data) => setCarts(data))
  }, [])
  return (
    <section>
      <div className='container mx-auto flex flex-col md:flex-row w-full items-start gap-x-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
          {carts.map((recipe) => (
            <Recipe key={recipe.id} />
          ))}
        </div>
        <Cooks></Cooks>
      </div>
    </section>
  )
}

export default Recipes