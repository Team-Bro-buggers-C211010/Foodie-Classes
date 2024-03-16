import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner'
import Recipes from './components/recipes/recipes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container mx-auto mt-6 md:mt-12'>
        <nav className='mb-6 md:mb-12'>
          <Header></Header>
        </nav>
        <section className='px-3 lg:px-0'>
          <Banner></Banner>
        </section>
        <section className='px-3 lg:px-0 mt-24'>
          <h1 className="text-[#150B2B] text-2xl md:text-[40px] mb-6 font-black text-center font_lexend">
          Our Recipes
          </h1>
          <p className="font_lexend text-[#150B2B99] text-base md:text-lg font-normal text-center mb-6 md:mb-12">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />urna volutpat curabitur elementum mauris aenean neque. 
        </p>
        <Recipes></Recipes>
        </section>
      </header>
    </>
  )
}
export default App