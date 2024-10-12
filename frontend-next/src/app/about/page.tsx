'use client';

import React from 'react';
import AboutUs from '../components/About/about';
import AboutHero from '../components/About/about-hero';
import OurStory from '../components/About/about-our-story';
import TeamSection from '../components/About/about-team';
import FAQSection from '../components/About/about-faq';

const AboutPage: React.FC = () => {
    return (
      <div className="pt-8"> 
        {/* <AboutHero /> */}
        {/* <AboutUs /> */}
        <OurStory />
        <TeamSection />
        <FAQSection />
      </div>
    );
  };
  
  export default AboutPage;