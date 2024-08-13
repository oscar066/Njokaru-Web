import Image from "next/image";
import React from 'react';
import ImprovedCarousel from "./components/Hero/Carousel";

const HomePage: React.FC = () => {
  return (
    <div className="pt-16"> 
      <ImprovedCarousel />
      <h1 className="text-3xl text-center">Hello World from Home Page</h1>
    </div>
  );
};

export default HomePage;
