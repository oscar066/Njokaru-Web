import React from 'react'
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact';
import CarouselFadeExample from './components/Hero/Carousel';

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <CarouselFadeExample />
     <AboutUs />
     <Cards />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
