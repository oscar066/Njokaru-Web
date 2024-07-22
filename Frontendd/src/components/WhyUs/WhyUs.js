
import React from 'react';
import { CheckCircle } from 'lucide-react';
import image1 from '../../Assets/eden-phase-1.jpeg';

const WhyUs = () => {
  const reasons = [
    "Experienced and professional team",
    "Quality workmanship",
    "Customized solutions",
    "Timely completion of projects",
    "Excellent customer service"
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Why Choose Us</h2>
            <p className="text-gray-700 text-lg mb-6">
              We are committed to providing the best gardening and maintenance services to our customers. Here are some reasons why you should choose us:
            </p>
            <ul className="space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src={image1}
              alt="Why Choose Us" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;