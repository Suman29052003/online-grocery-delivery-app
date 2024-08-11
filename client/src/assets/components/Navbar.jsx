import React, { useState } from 'react';
import logo from '/logo.png';
import cart from '/cart.png';
import user from '/user.png';
import menu from '/menu.png';
import { Link } from 'react-router-dom';

const Navbar = ({ isCartEmpty,totalUniqueItems }) => {
  const [active, setActive] = useState('');

  return (
    <section className='w-full flex items-center justify-around m-auto'>
      <div className="logo">
        <img src={logo} alt="" className='w-[11vw]' />
      </div>
      <div className="anchor-links">
        <ul className="flex gap-6 text-xl">
          <Link to='/' onClick={() => setActive('Home')} className={`cursor-pointer hover:scale-105 ${active === 'Home' ? 'border-b-[3px] border-[green] rounded-sm pb-1' : ""}`}>Home</Link>
          <a href='#about' onClick={() => setActive('About')} className={`cursor-pointer hover:scale-105 ${active === 'About' ? 'border-b-[3px] border-[green] rounded-sm pb-1' : ""}`}>About</a>
          <a href='#items' onClick={() => setActive('Items')} className={`cursor-pointer hover:scale-105 ${active === 'Items' ? 'border-b-[3px] border-[green] rounded-sm pb-1' : ""}`}>Items</a>
          <a href='#contact' onClick={() => setActive('Contact')} className={`cursor-pointer hover:scale-105 ${active === 'Contact' ? 'border-b-[3px] border-[green] rounded-sm pb-1' : ""}`}>Contact</a>
        </ul>
      </div>
      <div className="user">
        <ul className="flex gap-8">
          <Link to='/cart'>
            <li className="relative cursor-pointer hover:scale-105">
              <img src={cart} alt="" className='w-8' />
              {!isCartEmpty && (
                // <div className="bg-[green] w-3 h-3 absolute rounded-full bottom-7 left-7"></div>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{totalUniqueItems}</div>
              )}
            </li>
          </Link>
          <li className="cursor-pointer hover:scale-105"><img src={user} alt="" className='w-8' /></li>
          <li className="cursor-pointer hover:scale-105"><img src={menu} alt="" className='w-8' /></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar;
