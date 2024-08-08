import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import Items from './assets/components/Items'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[85%] m-auto'>
      <Home/>
      <Items/>
    </div>
    </>
  )
}

export default App
