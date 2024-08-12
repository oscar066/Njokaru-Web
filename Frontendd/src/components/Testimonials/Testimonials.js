// Testimonials.js
import React from 'react';
import BackgroundEffect from './BackgroundEffect';
import TestimonialCarousel from './TestimonialCarousel';

function Testimonials() {
  return (
    <section className="isolate bg-customGray px-6 py-24 sm:py-32 lg:px-8">
      <BackgroundEffect />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default Testimonials;