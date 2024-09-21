import React from "react";

function Filter({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className="flex justify-center mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-400"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
