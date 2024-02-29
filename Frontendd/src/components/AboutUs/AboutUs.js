
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../../Assets/eden-phase-2.jpeg';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="about-image-container">
            <img src={aboutImage} alt="About us" className="about-image" />
          </Col>
          <Col md={6} className="about-content">
            <h2>About Us</h2>
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
    </section>
  );
}

export default AboutUs;
