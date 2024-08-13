import React from 'react';
import { useCart } from 'react-use-cart';
import DataTable from '../components/DataTable';
import emptyCartImage from '/cart_is_empty.jpg';
import { Link } from 'react-router-dom';
import FormDialog from '../components/FormDialog';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  return (
    <>
      {isEmpty ? (
        <div className="w-full flex flex-col items-center py-12">
          <img src={emptyCartImage} alt="Empty Cart" className="w-full md:w-[50%] z-[-1]" />
          <span className='text-2xl font-semibold mt-4'>Cart is Empty!</span>
          <Link to='/' className="underline text-blue-600 cursor-pointer px-4 mt-4">Add items to cart</Link>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <DataTable
            items={items}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
          />
          <div className="flex justify-between items-center mt-6">
            <div className="text-lg font-semibold">
              <p>Total Items: {totalUniqueItems}</p>
              <p>Total Price: ${cartTotal.toFixed(2)}</p>
            </div>
            <FormDialog/>
          </div>
          <Link to='/#item' className="underline text-blue-600 cursor-pointer text-lg mt-4 block">Add more items</Link>
        </div>
      )}
    </>
  );
}

export default Cart;
