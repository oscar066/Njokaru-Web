import React from 'react';

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="" disabled selected>Sort by</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="popularity">Popularity</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
  );
};

export default SortOptions;
