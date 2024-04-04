
import React from 'react';
import './Cards.css';
import cardData from './CardData';

function Services() {
  return (
    <div className="services-wrapper">
      <div className='service-heading'>
        <h3 className="services-header">OUR <span className='highlight'>SERVICES</span></h3>
        <p className='service-heading-sub'>Discover tailored landscaping solutions to enhance your outdoor spaces.</p>
      </div>
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
