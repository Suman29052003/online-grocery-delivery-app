import React from 'react';
import groceryItems from '../GroceryAssets';
import ItemCard from './ItemCard';



const Items = () => {

  return (
    <section id='items' className='w-full p-4'>
      <h2 className='text-2xl sm:text-4xl font-medium text-[#40c901] text-center mb-4'>Available Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {groceryItems.map((item) => (
          <ItemCard 
          item={item}
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Items;