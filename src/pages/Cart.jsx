// Cart.jsx
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalPrice)
  const dispatch = useDispatch()
  console.log(cartItems);
  

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity < 1) {
      handleRemove(id)
      return;
    }

    dispatch(decreaseQty(id))
    
  };

  return (
    <div className="container min-h-[90vh] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-3xl text-center mt-[3em]">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={decreaseQuantity}
            />
          ))}

          <div className="flex justify-between mt-6">
            <h2 className="text-lg font-semibold">Total:</h2>
            <span className="text-2xl font-bold">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          <button className="mt-4 w-1/3 py-2 text-slate-800 bg-[#E5DDC5]  rounded-md hover:bg-[#F1EEDC]">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
