
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import aboutImage from '../../Assets/eden-phase-2.jpeg';
import './AboutUs.css';

function AboutUs() {
  return (
    <Container id="about" className="about-us">
      <Row>
        <Col className="about-image-container">
          <Image src={aboutImage} alt="About us" className="about-image" fluid />
        </Col>
        <Col className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to NJOKARU, where we bring your outdoor spaces to life. Our team of dedicated
            gardeners and maintenance professionals is passionate about creating and maintaining
            beautiful landscapes.
          </p>
          <p>
            With years of industry experience, we offer a comprehensive range of services,
            including garden design, landscaping, and regular maintenance. Our mission is to help
            clients fully enjoy their gardens and outdoor spaces.
          </p>
          <p>
            Whether you need a one-time service or ongoing maintenance, we're here to turn your
            outdoor dreams into reality. Contact us today to discover how we can help you create
            the garden of your dreams.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
