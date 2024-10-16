//'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteButton from '../Buttons/GetQuoteButton';

import image1 from '../../../../public/Assets/daniel.jpg';
import image2 from '../../../../public/Assets/eden-phase-1.jpeg';

interface CarouselItem {
  image: StaticImageData;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    image: image1,
    title: 'Transforming Your Outdoor Space',
    description: 'Enhance the beauty of your surroundings with our expert gardening and maintenance services.',
  },
  {
    image: image2,
    title: 'Expert Lawn Care Solutions',
    description: 'Keep your lawn healthy and vibrant with our professional lawn care services.',
  },
  {
    image: image1,
    title: 'Craft your landscape',
    description: 'Maintain the health and aesthetics of your trees with our expert pruning services.',
  },
];

const ImprovedCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover'}}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4 text-opacity-80">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg md:text-xl mb-8">{item.description}</p>
              <QuoteButton />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
      >
        <ChevronLeft className="text-green-800" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
      >
        <ChevronRight className="text-green-800" size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-green-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImprovedCarousel;
