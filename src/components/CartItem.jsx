// CartItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, decreaseQty } from "../store/cartSlice";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {

   const dispatch = useDispatch()
   return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <img
          className="w-16 h-16 object-scale-down rounded-md"
          src={item.image}
          alt={item.title}
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="px-2 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
        >
          -
        </button>
        <span className="mx-2">{item.qty}</span>
        <button
          onClick={() => dispatch(addItem({...item, qty :1}))}
          className="px-2 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
