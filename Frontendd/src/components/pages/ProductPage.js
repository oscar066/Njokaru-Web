import React, { useState, useEffect } from 'react';
import ProductList from '../Products/ProductList';
import ProductDetails from '../Products/ProductDetail';
import Cart from '../Products/Cart';
import SearchBar from '../Products/SearchBar';
import FilterOptions from '../Products/FilterOptions';
import SortOptions from '../Products/SortOptions';
import UserAuth from '../Products/UserAuth';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [filters, sortOption, currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filters, sort: sortOption, page: currentPage, itemsPerPage }),
      });
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories');
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    setSelectedProduct(null);
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleSearch = (query) => {
    setFilters({ ...filters, search: query });
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex items-center space-x-4">
          <UserAuth />
          <Cart
            items={cartItems}
            updateQuantity={handleUpdateCartQuantity}
            removeItem={handleRemoveFromCart}
            total={cartTotal}
          />
        </div>
      </div>

      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <FilterOptions categories={categories} onFilterChange={handleFilterChange} />
        <SortOptions onSortChange={handleSortChange} />
      </div>

      <ProductList products={products} onProductClick={handleProductClick} />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <div className="mt-8 flex justify-center">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 disabled:opacity-50"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage}</span>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 disabled:opacity-50"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={products.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
