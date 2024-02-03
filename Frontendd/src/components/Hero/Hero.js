import React from 'react';
import './Hero.css';
import image from "../../Assets/eden-phase-1.jpeg"

function Hero() {
  const backgroundImage = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="hero" style={backgroundImage}>
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
