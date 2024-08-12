import React from 'react';
import { useCart } from 'react-use-cart';
import DataTable from '../components/DataTable';
import emptyCartImage from '/cart_is_empty.jpg'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <>
      {isEmpty ? (
        <div className="w-full flex flex-col items-center">
          <img src={emptyCartImage} alt="" className="w-full md:w-[50%]" />
          <span className='text-2xl font-semibold'>Cart is Empty!</span>
          <Link to='/' className="underline text-blue-600 cursor-pointer">Add to cart</Link>
          </div>
      ) : (
        <>
          {/* <h1>Cart ({totalUniqueItems})</h1> */}
       <DataTable
            items={items}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}/>
        </>
      )}
      <Link to='/#item' className="underline text-blue-600 cursor-pointer text-lg">Add more Item</Link>
    </>
  );
}

export default Cart;
