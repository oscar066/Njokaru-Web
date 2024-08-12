// ProductDetails.js
import React, { useState } from 'react';
import ReviewSection from './ReviewSection';

const ProductDetails = ({ product, onAddToCart, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="relative p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <img 
              src={`/api/placeholder/${product.id}/300/200`} 
              alt={product.name} 
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
                <p className="mb-2">{product.description}</p>
                <p className="text-sm text-gray-500">Availability: {product.availability}</p>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 mr-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  onClick={() => onAddToCart(product, quantity)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <ReviewSection productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;