import React, { useState } from 'react';
import groceryItems from '../GroceryAssets';
import ItemCard from './ItemCard';
import Button from '@mui/material/Button';


const Items = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const limitedItems = groceryItems.slice(0,itemsToShow)

  return (
    <section id='items' className='w-full p-4'>
      <h2 className='text-2xl sm:text-4xl font-medium text-[#40c901] text-center mb-4'>Available Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {limitedItems.map((item,index) => (
          <ItemCard 
          item={item}
          key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <div className="button w-full flex items-center justify-center p-2">
      <Button variant="contained" color="success" onClick={()=>setItemsToShow(itemsToShow+10)} >
  Show More
</Button>
</div>
    </section>
  );
};

export default Items;