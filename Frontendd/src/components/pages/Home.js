import React from 'react'
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact';

function Home() {
  return (
    <div className="Home">
     <Header />
     <Hero />
     <AboutUs />
     <Cards />
     <Contact />
     <Footer />
    </div>
  )
}

export default Home

//rfce