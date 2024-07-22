import React from 'react'
import {Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';
import ContactPage from './components/pages/ContactPage.js';
import ServicePage from './components/pages/ServicePage.js';
import ProductPage from './components/pages/ProductPage.js';
import BlogPage from './components/pages/BlogPage.js';
import { Whoops404 } from './components/pages/pages.js';
import Login from './components/Auth/Login.js';
import Signup from './components/Auth/SignUp.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
