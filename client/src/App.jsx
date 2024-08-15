import React from 'react';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart, } from 'react-use-cart';
import Cart from './assets/pages/Cart';
import Profile from './assets/pages/Profile';
import CheckOut from './assets/components/CheckOut';
import Login from './assets/pages/LogIn';
import Signup from './assets/pages/Signup';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
};

const AppContent = () => {
  const { isEmpty, totalUniqueItems } = useCart();

  return (
    <>
      <Navbar isCartEmpty={isEmpty} totalUniqueItems={totalUniqueItems} /> {/* Navbar is inside the CartProvider context */}
      <div className='w-[85%] m-auto'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path ='/profile' element={<Profile/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
