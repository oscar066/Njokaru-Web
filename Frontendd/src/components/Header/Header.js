import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='navbar'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
    </div>
  )
}

export default Header;

