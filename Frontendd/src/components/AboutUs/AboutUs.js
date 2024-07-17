import React from 'react';
//import aboutImage from '../../Assets/eden-phase-2.jpeg';
import aboutImage from '../../Assets/devon.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-green-600">NJOKARU</span>
          </h1>
          <p className="text-xl text-gray-600">
            Crafting nature's canvas one garden at a time
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={aboutImage} 
              alt="About us" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to NJOKARU, where we bring your outdoor spaces to life. Our team of dedicated
                gardeners and maintenance professionals is passionate about creating and maintaining
                beautiful landscapes.
              </p>
              <p>
                With years of industry experience, we offer a comprehensive range of services,
                including garden design, landscaping, and regular maintenance. Our mission is to help
                clients fully enjoy their gardens and outdoor spaces.
              </p>
              <p>
                Whether you need a one-time service or ongoing maintenance, we're here to turn your
                outdoor dreams into reality. Contact us today to discover how we can help you create
                the garden of your dreams.
              </p>
            </div>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;