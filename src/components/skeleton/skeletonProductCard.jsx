import React from "react";

function Skeleton() {
  return (
    <div className="max-w-sm bg-white lg:h-[423px] lg:w-[294px] border-1 border-gray-200 shadow-md overflow-hidden animate-pulse transition duration-50 ">
      <div className="h-[183px]  bg-gray-200">
        {/* <img
            className="w-full h-40 object-scale-down "
            src={product.image}
            alt={product.title}
          /> */}
      </div>

      <div className="p-2 lg:p-5  sm:p-1 h-[10rem] lg:h-[12rem]">
        <h5 className=" w-2/3 lg:w-full my-1 bg-gray-200 h-5">{/* {product.title} */}</h5>
        <h5 className="w-1/3 lg:w-1/2  bg-gray-200 h-5"></h5>
        {/*   
          <div className="flex items-center mt-3 justify-between">
            <span className="text-2xl font-bold text-gray-900">
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
          </div> */}
      </div>

      <button className="px-3 py-4 w-full   text-gray-200 bg-gray-200 text-xs font-bold uppercase  ">
        Add
      </button>
    </div>
  );
}

export default Skeleton;
