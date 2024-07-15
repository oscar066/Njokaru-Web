import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const ProductImage = ({ src, alt }) => (
  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-600">({reviews} reviews)</span>
  </div>
);

const Button = ({ icon, children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`mt-4 w-full py-3 px-4 rounded-md flex items-center justify-center ${
      primary 
        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <ProductImage src={product.image} alt={product.name} />
    <h2 className="text-xl font-bold mt-4">{product.name}</h2>
    <p className="text-2xl font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
    <Rating rating={product.rating} reviews={product.reviews} />
    <p className="mt-2 text-gray-600">{product.description}</p>
    <Button primary icon="🛒" onClick={() => console.log(`Add ${product.name} to cart`)}>
      Add to Cart
    </Button>
    <Button icon="♡" onClick={() => console.log(`Add ${product.name} to wishlist`)}>
      Add to Wishlist
    </Button>
  </div>
);

const ProductPage = () => {
  // Static product data
  const products = [
    {
      id: 1,
      name: "Professional Gardening Gloves",
      price: 24.99,
      rating: 4,
      reviews: 128,
      description: "Durable and comfortable gardening gloves with reinforced fingertips for protection and grip.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      name: "Ergonomic Pruning Shears",
      price: 39.99,
      rating: 5,
      reviews: 95,
      description: "High-quality pruning shears with ergonomic handles for comfortable and precise pruning of plants and small branches.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      name: "Solar-Powered Garden Lights",
      price: 59.99,
      rating: 4,
      reviews: 76,
      description: "Eco-friendly solar garden lights to illuminate your pathways and highlight landscape features at night.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 4,
      name: "Composting Bin",
      price: 89.99,
      rating: 4,
      reviews: 52,
      description: "Large capacity composting bin for efficient decomposition of organic waste into nutrient-rich soil for your garden.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      name: "Adjustable Garden Kneeler and Seat",
      price: 45.99,
      rating: 5,
      reviews: 103,
      description: "Versatile garden tool that functions as both a kneeling pad and a seat, making gardening tasks more comfortable.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 6,
      name: "Premium Garden Hose (50ft)",
      price: 69.99,
      rating: 4,
      reviews: 87,
      description: "Flexible, kink-free garden hose with brass fittings and multiple spray patterns for efficient watering.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 7,
      name: "Electric Leaf Blower & Mulcher",
      price: 129.99,
      rating: 4,
      reviews: 64,
      description: "Powerful 3-in-1 tool for blowing, vacuuming, and mulching leaves and garden debris with variable speed control.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 8,
      name: "Raised Garden Bed Kit",
      price: 79.99,
      rating: 5,
      reviews: 118,
      description: "Easy-to-assemble raised garden bed for growing vegetables, herbs, and flowers in small spaces or poor soil conditions.",
      image: "/api/placeholder/400/400"
    },
    {
      id: 7,
      name: "Electric Leaf Blower & Mulcher",
      price: 129.99,
      rating: 4,
      reviews: 64,
      description: "Powerful 3-in-1 tool for blowing, vacuuming, and mulching leaves and garden debris with variable speed control.",
      image: "/api/placeholder/400/400"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;