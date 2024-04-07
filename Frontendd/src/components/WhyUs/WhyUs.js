
import React from 'react';
import './WhyUs.css';
import image1 from '../../Assets/eden-phase-1.jpeg';

function WhyUs() {
  return (
    <section className="why-us py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="mb-4">We are committed to providing the best gardening and maintenance services to our customers. Here are some reasons why you should choose us:</p>
            <ul className="list-unstyled mb-4">
              <li>Experienced and professional team</li>
              <li>Quality workmanship</li>
              <li>Customized solutions</li>
              <li>Timely completion of projects</li>
              <li>Excellent customer service</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={image1} alt="Why Choose Us" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
