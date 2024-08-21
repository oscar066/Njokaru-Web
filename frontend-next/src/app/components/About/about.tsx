import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import aboutImage from '../../../../public/Assets/devon.jpg';

const AboutUs = () => {
  const router = useRouter();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-green-600">NJOKARU</span>
          </h1>
          <p className="text-xl text-gray-600 italic">
            Crafting nature's canvas one garden at a time
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <Image 
              src={aboutImage} 
              alt="Team working on garden design" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">10+ Years</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 mb-8">
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
            <button 
              onClick={() => router.push('/about')}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
