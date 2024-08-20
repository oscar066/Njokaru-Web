'use client';

import React from 'react';
import ImprovedCarousel from "./components/Hero/Carousel";
import AboutUs from "./components/About/about";
import Services from "./components/Services/services";

const HomePage: React.FC = () => {
  return (
    <div className='pt-8'> 
      <ImprovedCarousel />
      <AboutUs />
      <Services />
    </div>
  );
};

export default HomePage;
