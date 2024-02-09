import React from 'react'

import {Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home.js';

import {
  
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './components/pages/pages.js'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
