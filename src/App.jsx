import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner'
import Recipes from './components/recipes/recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [newArray, setNewArray] = useState([])
  const [wantCook,setWantCook] = useState([])
  const handleWantToCook = (recipe) => {
    const checkExists = wantCook.find(cook => cook.id === recipe.id);
    if (!checkExists) {
      setWantCook(cook => [...cook, recipe]);
      toast.success("Recipe added successfully !");
    }
    else{
      toast.warning("Already added !");
    }
    const checkCooking = newArray.find(cooking => cooking.id === recipe.id);
    if(checkCooking){
      toast.info("A portion of this is already in cooking process !");
    }
  }
  const handleCurrentCook = (carts) => {
    const newCarts = wantCook.filter(currentCook => currentCook.id !== carts.id);
    setWantCook(newCarts);
    setNewArray(prevArray => [...prevArray, carts]);
  }
  
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
        <Recipes wantCook={wantCook} handleWantToCook={handleWantToCook} handleCurrentCook={handleCurrentCook} newArray={newArray}></Recipes>
        </section>
      </header>
      <ToastContainer />
    </>
  )
}
export default App