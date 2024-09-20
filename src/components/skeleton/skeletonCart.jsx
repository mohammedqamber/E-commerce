import React from "react";

function SkeletonCart() {
  return (
    <>
      <div className="container min-h-[90vh] mx-auto px-4 py-8 animate-pulse duration-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 object-scale-down rounded-md" />
            <div className="ml-4">
              <h2 className="text-lg text-gray-300 bg-gray-300 mb-1">
                Mens cotton JACKET BLAH BLACH BLAHFF blach blah blah
              </h2>
              <p className="text-gray-300 bg-gray-300 w-1/3">$67.33</p>
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 object-scale-down rounded-md" />
            <div className="ml-4">
              <h2 className="text-lg text-gray-300 bg-gray-300 mb-1">
                Mens cotton JACKET BLAH BLACH BLAHFF blach blah blah
              </h2>
              <p className="text-gray-300 bg-gray-300 w-1/3">$67.33</p>
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-300 object-scale-down rounded-md" />
            <div className="ml-4">
              <h2 className="text-lg text-gray-300 bg-gray-300 mb-1">
                Mens cotton JACKET BLAH BLACH BLAHFF blach blah blah
              </h2>
              <p className="text-gray-300 bg-gray-300 w-1/3">$67.33</p>
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>
        
      </div>
    </>
  );
}

export default SkeletonCart;
