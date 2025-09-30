'use client'
import React, { useContext } from "react";
import { CartContext, Product } from "../context/CartContext/CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error: Cart context not available.</p>;
  }
  const { cartItems, removeFromCart } = context;

  const total = cartItems.reduce((acc:number, item:Product) => acc + item.price * 83, 0);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item:Product, index:number) => (
            <div key={index} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid p-3" alt={item.title} style={{ height: '200px', objectFit: 'contain' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">₹{(item.price * 83).toFixed(0)}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4>Total: ₹{total.toFixed(0)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;







