import React from 'react';
import './Cards.css';
import cardData from './CardData';

function Services() {
  return (
    <div>
      <h3 className="services-header">OUR SERVICES</h3>
      <div className='services-container'>
        {cardData.map((service) => (
          <div key={service.id} className='service-card'>
            <div className='service-icon'>{service.icon}</div>
            <h3 className='service-title'>{service.title}</h3>
            <p className='service-description'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
