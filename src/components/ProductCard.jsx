import React from "react";
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="max-w-sm bg-white  border-1 border-gray-200 shadow-md overflow-hidden transform transition    duration-500 hover:scale-105">
        <Link to={`/products/${product.id}`}>
          <div className="p-3  bg-gray-100">
            <img
              className="w-full h-40 object-scale-down "
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="p-2 lg:p-5 sm:p-1 h-[10rem] lg:h-[12rem]">
            <h5 className="text-base font-semibold tracking-tight text-gray-900">
            {((product.title).split(" ").length > 8) ? ((product.title).split(" ").slice(0, 8).join(" ") + "..." ) : (product.title)}
            </h5>

            <div className="flex items-center mt-3 justify-between">
              <span className="text-sm lg:text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.244 6.91l6.558-.955L10 0l3.198 5.955 6.558.955-4.782 4.635 1.122 6.545z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {product.rating.rate}
                </span>
              </div>
              <span className="ml-2 text-sm text-gray-400">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </Link>
        
        <AddToCartBtn key={product.id} product={product} />
      </div>
    </>
  );
};

export default ProductCard;
