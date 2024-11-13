'use client';

import React from 'react';

import ImprovedCarousel from "./components/Hero/Carousel";
import AboutUs from "./components/About/about";
import Services from "./components/Services/services";
import Testimonials from './components/Testimonials/testimonials';

const HomePage: React.FC = () => {
  return (
    <div className='pt-8'> 
      <ImprovedCarousel />
      <AboutUs />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;
