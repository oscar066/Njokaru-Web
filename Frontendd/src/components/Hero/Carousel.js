
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../Assets/eden-phase-1.jpeg'
import image2 from '../../Assets/eden-phase-2.jpeg'
import './Carousel.css'


function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Transforming Your Outdoor Space</h3>
          <p>Enhance the beauty of your surroundings with our expert gardening and maintenance services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Expert Lawn Care Solutions</h3>
          <p>Keep your lawn healthy and vibrant with our professional lawn care services.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Precision Tree Pruning</h3>
          <p>
          Maintain the health and aesthetics of your trees with our expert pruning services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
