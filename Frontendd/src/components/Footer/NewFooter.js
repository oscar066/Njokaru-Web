
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function NewFooter() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className="info_contact">
          <h4>Address</h4>
          <div className="contact_link_box">
            <a href="#">
              <FaMapMarkerAlt />
              <span>123 Techtonic St, Silicon Valley</span>
            </a>
            <a href="tel:+011234567890">
              <FaPhone />
              <span>Call +01 1234567890</span>
            </a>
            <a href="mailto:info@techtonicdevs.com">
              <FaEnvelope />
              <span>info@techtonicdevs.com</span>
            </a>
          </div>
        </div>
        <div className="info_social">
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaLinkedin /></a>
            <a href='#'><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className='footer-section'>
        <div className="info_detail">
          <h4>About Techtonic Devs</h4>
          <p>Techtonic Devs is a leading software development company specializing in creating innovative solutions for businesses worldwide.</p>
        </div>
        <div className="info_link_box">
          <h4>Links</h4>
          <div className="info_links">
            <a className="" href="index.html">Home</a>
            <a className="" href="about.html">About</a>
            <a className="" href="services.html">Services</a>
            <a className="" href="portfolio.html">Portfolio</a>
            <a className="" href="contact.html">Contact</a>
          </div>
        </div>
      </div>
      <div className='footer-section'>
        <h4>Subscribe</h4>
        <form action="#">
          <input type="email" placeholder="Enter email" style={{ padding: '10px', borderRadius: '5px', border: 'none', width: '100%', marginBottom: '10px' }} />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ffffff', color: '#1c6204', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default NewFooter;
