import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-text">Transforming Your Outdoor Space</h1>
        <p className="hero-subtext">
          Enhance the beauty of your surroundings with our expert gardening and maintenance services.
        </p>
        <button className="cta-button">Explore Services</button>
      </div>
    </div>
  );
}

export default Hero;
