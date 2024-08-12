// TestimonialCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './TestimonialData';

function TestimonialCarousel() {
  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <TestimonialCard {...testimonial} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TestimonialCarousel;