import React, { useState } from 'react'
import logo from '/logo.png'
import cart from '/cart.png'
import user from '/user.png'
import menu from '/menu.png'

const Navbar = () => {
 const [active, setActive] = useState('Home')

  return (
    <section className='w-full flex items-center justify-around'>
      <div className="logo">
            <img src={logo} alt="" className='w-[11vw]'/>
      </div>
      <div className="anchor-links">
            <ul className="flex gap-6 text-xl">
                <a href='#home' onClick={()=>setActive('Home')}  className={`cursor-pointer hover:scale-105 ${active==='Home'?'border-b-[3px] border-[green] rounded-sm pb-1':""}`}>Home</a>
                <a href='#about' onClick={()=>setActive('About')}  className={`cursor-pointer hover:scale-105 ${active==='About'?'border-b-[3px] border-[green] rounded-sm pb-1':""}`}>About</a>
                <a href='#items'  onClick={()=>setActive('Items')} className={`cursor-pointer hover:scale-105 ${active==='Items'?'border-b-[3px] border-[green] rounded-sm pb-1':""}`}>Items</a>
                <a href='#contact' onClick={()=>setActive('Contact')}  className={`cursor-pointer hover:scale-105 ${active==='Contact'?'border-b-[3px] border-[green] rounded-sm pb-1':""}`}>Contact</a>
            </ul>
      </div>
      <div className="user">
        <ul className="flex gap-8">
            <li className="relative cursor-pointer hover:scale-105">
                <img src={cart} alt="" className='w-8' />
                <div className="bg-[green] w-3 h-3 absolute rounded-full bottom-7 left-7"></div>
            </li>
            <li className="cursor-pointer hover:scale-105"><img src={user} alt="" className='w-8'/></li>
            <li className="cursor-pointer hover:scale-105"><img src={menu} alt="" className='w-8'/></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
