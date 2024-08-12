// Cart.js
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ items, updateQuantity, removeItem, total }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        <ShoppingCart className="mr-2" size={20} />
        <span>{items.length} items</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
          </div>
          <div className="p-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button 
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;