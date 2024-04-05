
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h4>Gardening & Maintenance</h4>
            <p>Creating and maintaining beautiful outdoor spaces.</p>
          </div>
          <div className='col-md-3'>
            <h4>Contact Us</h4>
            <p>Email: njokaru@gardening.com</p>
            <p>Phone: +254 719686913</p>
          </div>
          <div className='col-md-3'>
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
          <div className='col-md-3'>
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container text-center copyright-section'>
        <p className="copyright">&copy; {new Date().getFullYear()} Gardening & Maintenance. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
