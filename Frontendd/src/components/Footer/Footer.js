import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: FaFacebook, href: 'https://www.facebook.com/' },
  { icon: FaTwitter, href: 'https://twitter.com/' },
  { icon: FaInstagram, href: 'https://www.instagram.com/' },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Gardening & Maintenance</h4>
          <p>Creating and maintaining beautiful outdoor spaces.</p>
        </div>
        <div className='footer-section'>
          <h4>Contact Us</h4>
          <p><FaEnvelope /> njokaru@gardening.com</p>
          <p><FaPhone /> +254 719686913</p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target='_blank' rel='noopener noreferrer' aria-label={`Visit our ${link.icon.name.replace('Fa', '')}`}>
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <li key={index}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className='copyright-section'>
        <p>&copy; {new Date().getFullYear()} Gardening & Maintenance. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;