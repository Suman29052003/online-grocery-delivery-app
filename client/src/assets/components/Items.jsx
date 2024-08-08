import React, { useEffect, useState } from 'react';
import groceryItems from '../GroceryAssets';

const Items = () => {



  return (
    <section id='items' className='w-full'>
      <h2 className='text-xl font-bold mb-4'>Available Items</h2>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index} className='mb-2'>
            <img src="" alt="" className="" />
            <p className="">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Items;
