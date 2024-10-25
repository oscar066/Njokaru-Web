import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import tommyImage from '../../../../public/Assets/tommy.jpg';
import danImage from '../../../../public/Assets/dan.jpg';
import janeImage from '../../../../public/Assets/daniel.jpg';

type Testimonial = {
  name: string;
  position: string;
  testimonial: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    position: 'Homeowner',
    testimonial:
      'Njokaru transformed our garden into a beautiful oasis. Their attention to detail and professionalism are unmatched!',
    image: tommyImage.src,
  },
  {
    name: 'Jane Smith',
    position: 'Property Manager',
    testimonial:
      "We rely on Njokaru for all our landscaping needs. They always deliver top-notch service with a smile.",
    image: janeImage.src,
  },
  {
    name: 'Michael Johnson',
    position: 'Business Owner',
    testimonial:
      "Thanks to Njokaru, our office grounds have never looked better. Highly recommended for any landscaping project!",
    image: danImage.src,
  },
  {
    name: 'Emily Brown',
    position: 'Landscape Architect',
    testimonial:
      "Working with Njokaru has been a pleasure. Their team's expertise and dedication shine through in every project.",
    image: tommyImage.src,
  },
  {
    name: 'David Wilson',
    position: 'Community Manager',
    testimonial:
      "Njokaru's services have greatly improved our community's common areas. Residents are thrilled with the results!",
    image: janeImage.src,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('default');
  const slidesToShow = { default: 1, md: 2, lg: 3 };

  // Memoize nextSlide function to use in useEffect
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= extendedTestimonials.length - slidesToShow[screenSize as keyof typeof slidesToShow] 
        ? 0 
        : prevIndex + 1
    );
  }, [screenSize, slidesToShow]);

  // Fix useMemo dependency array
  const extendedTestimonials = useMemo(() => {
    const repeated = [...testimonials, ...testimonials, ...testimonials];
    return repeated.slice(0, repeated.length - (repeated.length % slidesToShow.lg));
  }, [slidesToShow.lg]); // Added missing dependency

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 
        ? extendedTestimonials.length - slidesToShow[screenSize as keyof typeof slidesToShow] 
        : prevIndex - 1
    );
  }, [screenSize, slidesToShow, extendedTestimonials.length]);

  // Fix useEffect dependency array
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('lg');
      } else if (window.innerWidth >= 768) {
        setScreenSize('md');
      } else {
        setScreenSize('default');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [nextSlide]); // Added missing dependency

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Our <span className="text-green-700">Clients Say</span>
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow[screenSize as keyof typeof slidesToShow])}%)` }}
          >
            {extendedTestimonials.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="w-24 h-24 mx-auto rounded-full mb-4 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} photo`}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{item.name}</p>
                  <p className="text-gray-600 mb-4">{item.position}</p>
                  <p className="text-gray-700 italic">{item.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-green-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-green-700" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex % testimonials.length ? 'bg-green-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;