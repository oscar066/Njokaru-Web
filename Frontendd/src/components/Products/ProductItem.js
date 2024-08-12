// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onClick }) => {
  return (
    <div className="cursor-pointer border rounded-lg shadow-lg overflow-hidden" onClick={() => onClick(product)}>
      <div className="w-full h-40 overflow-hidden">
        <img src={`/api/placeholder/${product.id}/200/150`} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{product.shortDescription}</p>
        <p className="font-bold mt-2 text-green-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
