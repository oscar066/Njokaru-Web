// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductList;