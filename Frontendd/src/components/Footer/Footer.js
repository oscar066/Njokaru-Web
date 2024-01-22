
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>Gardening & Maintenance</h3>
        <p>Creating and maintaining beautiful outdoor spaces.</p>
      </div>
      <div className='footer-section'>
        <h4>Contact Us</h4>
        <p>Email: njokaru@gardening.com</p>
        <p>Phone: +254 719686913</p>
      </div>
      <div className='footer-section'>
        <h4>Follow Us</h4>
        <div className='social-icons'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebook />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
