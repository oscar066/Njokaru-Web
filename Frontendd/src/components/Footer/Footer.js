import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Products', href: '/products' },
];

const socialLinks = [
  { icon: FaFacebook, href: 'https://www.facebook.com/' },
  { icon: FaTwitter, href: 'https://twitter.com/' },
  { icon: FaInstagram, href: 'https://www.instagram.com/' },
];

function Footer() {
  return (
    <footer className="bg-customGreen text-white font-sans">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto py-10 px-5 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">NJOKARU</h4>
          <p className="text-gray-300 mb-4">Creating and maintaining beautiful outdoor spaces.</p>
          <a href="/services" className="text-green-500 hover:text-green-300 transition-colors duration-300">Explore Our Services</a>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Contact Us</h4>
          <p className="text-gray-300 mb-2"><FaEnvelope className="inline mr-2" /> njokaru@gardening.com</p>
          <p className="text-gray-300 mb-2"><FaPhone className="inline mr-2" /> +254 719686913</p>
          <p className="text-gray-300 mb-2"><FaMapMarkerAlt className="inline mr-2" /> EdenVille Phase 1, Kiambu, Kenya</p>
          <p className="text-gray-300 mb-4"><FaClock className="inline mr-2" /> Mon - Fri: 9:00 AM - 5:00 PM</p>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Follow Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target='_blank' rel='noopener noreferrer' aria-label={`Visit our ${link.icon.name.replace('Fa', '')}`} className="text-2xl transition-colors duration-300 hover:text-green-500">
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}><a href={link.href} className="text-gray-300 transition-colors duration-300 hover:text-green-500">{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white text-black text-center py-1">
        <p className="text-sm text-center py-1">&copy; {new Date().getFullYear()} NJOKARU Gardening & Maintenance. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
