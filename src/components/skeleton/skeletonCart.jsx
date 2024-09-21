import React from "react";

function SkeletonCart() {
  return (
    <>
      <div className="container min-h-[90vh] mx-auto px-4 py-8 animate-pulse duration-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center w-full">
            <div className="w-16 h-16 bg-gray-200 object-scale-down rounded-md" />
            <div className="ml-4 w-full">
              <h2 className="text-lg w-1/2 lg:w-2/5 h-7 text-gray-300 bg-gray-200 mb-1"></h2>
              <p className="text-gray-200 bg-gray-200 w-[15%]">$63.21</p>
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center w-full">
            <div className="w-16 h-16 bg-gray-200 object-scale-down rounded-md" />
            <div className="ml-4 w-full">
              <h2 className="text-lg w-1/2 lg:w-2/5 h-7 text-gray-300 bg-gray-200 mb-1"></h2>
              <p className="text-gray-200 bg-gray-200 w-[15%]">$63.21</p>
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </>
  );
}

export default SkeletonCart;
