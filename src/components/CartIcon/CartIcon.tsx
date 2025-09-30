'use client'
import { CartContext } from '../../context/CartContext/CartContext';
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
    const context = useContext(CartContext);
    if (!context) {
    return <p>Error: Cart context not available.</p>;
  }
  const { cartItems} = context;
  return (
    <><FaShoppingCart /> ({cartItems.length})</>
      
    
  )
}

export default CartIcon