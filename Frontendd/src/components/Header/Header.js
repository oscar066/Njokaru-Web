import React from 'react';
import './header.css';

function Header() {
  return (
    <header className='navbar'>
      <div className='company-name'>
        <span>NJOKARU</span>
      </div>
      <nav className='nav-links'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
