
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <span className='company-name'>NJOKARU</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className='nav-links'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
