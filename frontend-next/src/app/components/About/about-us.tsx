import React from "react";
// import { Header } from "../About/header";
import { OurStory } from "../About/our-story";
import { OurMission } from "../About/our-mission";
import { OurValues } from "../About/our-values";
import { OurTeam } from "../About/our-team";
import { OurExpertise } from "../About/our-expertise";
import { Testimonials } from "../About/testimonials";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <Header /> */}
      <OurStory />
      <OurMission />
      <OurValues />
      <OurTeam />
      <OurExpertise />
      <Testimonials />
    </div>
  );
}
