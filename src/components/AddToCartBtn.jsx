import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check } from "lucide-react";
import { addItem } from "../store/cartSlice";

function AddToCartBtn({product}) {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const i = cartItems.find((item) => item.id === product.id);
    if (i) setAdded(true);
  }, []);

  return (
    <button
      onClick={() => {
        if (!added) {
          dispatch(addItem({ ...product, qty: 1 }));
          setAdded(true);
        }
      }}
      className="px-3 py-3 w-full  bg-[#E5DDC5] text-gray-700 text-xs font-bold uppercase  hover:bg-[#F1EEDC]"
    >
        {added ? (
            <div className="flex justify-center items-center h-6">
              <span>Added</span>
              <Check />
            </div>
          ) : (
            <div className="h-6 flex justify-center items-center">
              Add to Cart
            </div>
          )}
    </button>
  );
}

export default AddToCartBtn;
