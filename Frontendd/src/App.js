import React from 'react'
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact';
import CarouselFade from './components/Hero/Carousel';
import CustomNavbar from './components/Header/Navbar';

function App() {
  return (
    <div className="App">
     <CustomNavbar />
     <CarouselFade />
     <AboutUs />
     <Cards />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
