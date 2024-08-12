// FilterOptions.js
import React from 'react';

const FilterOptions = ({ categories, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <select 
        onChange={(e) => onFilterChange('category', e.target.value)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select 
        onChange={(e) => onFilterChange('priceRange', e.target.value)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Price Range</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100+">$100+</option>
      </select>

      <select 
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Rating</option>
        <option value="4+">4+ Stars</option>
        <option value="3+">3+ Stars</option>
        <option value="2+">2+ Stars</option>
      </select>
    </div>
  );
};

export default FilterOptions;