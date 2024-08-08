import React, { useEffect, useState } from 'react';
import groceryItems from '../GroceryAssets';

const Items = () => {



  return (
    <section id='items' className='w-full'>
      <h2 className='text-xl font-bold mb-4'>Available Items</h2>
      <ul>
        {groceryItems.map((item) => (
          <li key={item.id} className='mb-2'>
            <img src={item.image} alt="" className="w-40 h-[10vw]" />
            <p className="">{item.name} {item.rating}</p>
            <p className="">{item.price}</p>
            <p className="">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Items;
