import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import Items from './assets/components/Items'
import { CartProvider } from 'react-use-cart'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Cart from './assets/pages/Cart'

const App = () => {

  return (
    <Router>
    <Navbar/>
    <CartProvider>
    <div className='w-[85%] m-auto'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Items/>
    </div>
    </CartProvider>
    </Router>
  )
}

export default App
