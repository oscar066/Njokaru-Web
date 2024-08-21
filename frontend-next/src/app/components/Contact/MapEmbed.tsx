
import React from 'react';

const MapEmbed: React.FC = () => (
  <div className="relative flex items-center justify-center bg-cover bg-center rounded-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.642767292865!2d36.8292854492139!3d-1.1833284212049473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d9486a3f407%3A0xb417fa1b9cc667!2sEdenville%20Villas%20Phase%201!5e1!3m2!1sen!2ske!4v1721255264803!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '8px' }}
      allowFullScreen={true}
      loading="lazy"
      title="Business Location"
    ></iframe>
  </div>
);

export default MapEmbed;
