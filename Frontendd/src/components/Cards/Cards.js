import React from 'react';
import cardData from './CardData';

function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">
            OUR <span className="text-green-600">SERVICES</span>
          </h3>
          <p className="text-xl text-gray-600">
            Discover tailored landscaping solutions to enhance your outdoor spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl text-green-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;