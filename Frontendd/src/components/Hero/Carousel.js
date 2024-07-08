
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../Assets/eden-phase-1.jpeg';
import image2 from '../../Assets/eden-phase-2.jpeg';
import './Carousel.css';

const carouselItems = [
  {
    image: image1,
    title: "Transforming Your Outdoor Space",
    description: "Enhance the beauty of your surroundings with our expert gardening and maintenance services.",
  },
  {
    image: image2,
    title: "Expert Lawn Care Solutions",
    description: "Keep your lawn healthy and vibrant with our professional lawn care services.",
  },
  {
    image: image1,
    title: "Precision Tree Pruning",
    description: "Maintain the health and aesthetics of your trees with our expert pruning services.",
  },
];

function ModernCarousel() {
  return (
    <Carousel fade className="modern-carousel">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-container">
            <img className="carousel-image" src={item.image} alt={`Slide ${index + 1}`} />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="cta-button">Learn More</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ModernCarousel;
