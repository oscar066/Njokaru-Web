import React from 'react';
import serviceData from './servicesData';

interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode; 
}

const Services: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">
            OUR <span className="text-green-700">SERVICES</span>
          </h3>
          <p className="text-xl text-gray-600">
            Discover tailored landscaping solutions to enhance your outdoor spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service: ServiceData) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-xl p-6 transition duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="text-4xl text-green-700 mb-4">{service.icon}</div>
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
