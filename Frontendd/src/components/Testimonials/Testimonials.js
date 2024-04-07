
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Avatar from 'react-avatar'
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="text-center mb-5">Client Testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <div className="testimonial-card">
              <div className="testimonial-text">
              </div>
              <div className="testimonial-author">
              <Avatar
                  name="John Doe"
                  size="100"
                  round={true}
                  className="avatar"
                />
                <div className="author-info">
                  <h4>John Doe</h4>
                  <p>CEO, Design Txt</p>
                  <p>"Lorem ipsum dolor."</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-card">
              <div className="testimonial-text">
              </div>
              <div className="testimonial-author">
              <Avatar
                  name="Michelle Njeri"
                  size="100"
                  round={true}
                  className="avatar"
                />
                <div className="author-info">
                  <h4>Michelle Njeri</h4>
                  <p>CTO, Mich ltd</p>
                  <p>"Lorem ipsum"</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-card">
              <div className="testimonial-text">
              </div>
              <div className="testimonial-author">
              <Avatar
                  name="Mark Nyoike"
                  size="100"
                  round={true}
                  className="avatar"
                />
                <div className="author-info">
                  <h4>Mark Nyoike</h4>
                  <p>CTO, Markus</p>
                  <p>"Wonderful services "</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-card">
              <div className="testimonial-text">
              </div>
              <div className="testimonial-author">
              <Avatar
                  name="Jayson Ndungu"
                  size="100"
                  round={true}
                  className="avatar"
                />
                <div className="author-info">
                  <h4>Jayson Ndungu</h4>
                  <p>CTO, Ayason</p>
                  <p>"Good services and professionalism "</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
