import React from "react";
import { OurStory } from "../About/our-story";
import { OurMission } from "../About/our-mission";
import { OurValues } from "../About/our-values";
import { OurTeam } from "../About/our-team";
import { OurExpertise } from "../About/our-expertise";
import { Testimonials } from "../About/testimonials";

export default function AboutUs() {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <OurStory />
        <OurMission />
        <OurValues />
        <OurTeam />
        <OurExpertise />
        <Testimonials />
      </div>
    </div>
  );
}
