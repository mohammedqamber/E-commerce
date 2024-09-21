import React from "react";

function SkeletonProductCard() {
  return (
    <div className="max-w-sm bg-white lg:h-[423px] lg:w-[294px] border-1 border-gray-200 shadow-md overflow-hidden animate-pulse transition duration-50 ">
      <div className="h-[183px]  bg-gray-200">
      </div>

      <div className="p-2 lg:p-5  sm:p-1 h-[10rem] lg:h-[12rem]">
        <h5 className=" w-2/3 lg:w-full my-1 bg-gray-200 h-5"></h5>
        <h5 className="w-1/3 lg:w-1/2  bg-gray-200 h-5"></h5>      
      </div>

      <button className="px-3 py-4 w-full   text-gray-200 bg-gray-200 text-xs font-bold uppercase  ">
        Add
      </button>
    </div>
  );
}

export default SkeletonProductCard;
