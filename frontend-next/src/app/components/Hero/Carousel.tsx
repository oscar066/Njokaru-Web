'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(nextSlide, 10000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4 text-opacity-80 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
              <p className="text-base sm:text-lg md:text-xl mb-8">{item.description}</p>
              <QuoteButton />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-green-800" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
        aria-label="Next slide"
      >
        <ChevronRight className="text-green-800" size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-green-600' : 'bg-white bg-opacity-50'
            } focus:outline-none focus:ring-2 focus:ring-green-600`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  );
};

export default ImprovedCarousel;