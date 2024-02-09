import React from 'react'
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Cards from '../Cards/Cards'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Carousel from '../../components/Hero/Carousel'

function HomePage() {
  return (
    <div className="Home">
     <Navbar />
     <Carousel />
     <AboutUs />
     <Cards />
     <Contact />
     <Footer />
    </div>
  )
}

export default HomePage

//rfce

// page 161 for microservices  
// page 419 for learning React