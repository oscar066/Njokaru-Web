"use client";

import React from "react";

import AboutHero from "../components/About/about-hero";
// import AboutUsStory from "../components/About/about-us-story";
import AboutUs from "../components/About/about-us";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-8">
      <AboutHero />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
