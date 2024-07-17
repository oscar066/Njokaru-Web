
import React from 'react'
import Footer1 from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import AboutUs from '../AboutUs/AboutUs'
import WhyUs from '../WhyUs/WhyUs'

function AboutPage() {
  return (
    <div className='AboutPage'>
        <Navbar />
        <AboutUs />
        <WhyUs />
        <Footer1 />
    </div>
  )
}

export default AboutPage