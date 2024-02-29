
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../Assets/eden-phase-1.jpeg';
import image2 from '../../Assets/eden-phase-2.jpeg';
import './Carousel.css';

function ModernCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="carousel-image" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h2>Transforming Your Outdoor Space</h2>
          <p>Enhance the beauty of your surroundings with our expert gardening and maintenance services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h2>Expert Lawn Care Solutions</h2>
          <p>Keep your lawn healthy and vibrant with our professional lawn care services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={image1} alt="Third slide" />
        <Carousel.Caption>
          <h2>Precision Tree Pruning</h2>
          <p>Maintain the health and aesthetics of your trees with our expert pruning services.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ModernCarousel;
