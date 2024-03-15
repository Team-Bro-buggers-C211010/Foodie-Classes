import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container mx-auto mt-6 md:mt-12'>
        <nav className='mb-6 md:mb-12'>
        <Header></Header>
        </nav>
        <Banner></Banner>
      </header>
    </>
  )
}
export default App