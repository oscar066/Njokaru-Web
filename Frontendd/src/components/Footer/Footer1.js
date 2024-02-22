// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer1.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>Gardening & Maintenance</h3>
        <p>Creating and maintaining beautiful outdoor spaces.</p>
      </div>
      <div className='footer-section'>
        <h4>Contact Us</h4>
        <p>Email: <a href='mailto:njokaru@gardening.com'>njokaru@gardening.com</a></p>
        <p>Phone: +254 719686913</p>
      </div>
      <div className='footer-section'>
        <h4>Follow Us</h4>
        <div className='social-icons'>
          <SocialLink
            href='https://www.facebook.com/'
            icon={<FaFacebook />}
            label='Facebook'
          />
          <SocialLink
            href='https://twitter.com/'
            icon={<FaTwitter />}
            label='Twitter'
          />
          <SocialLink
            href='https://www.instagram.com/'
            icon={<FaInstagram />}
            label='Instagram'
          />
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='social-link'
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
