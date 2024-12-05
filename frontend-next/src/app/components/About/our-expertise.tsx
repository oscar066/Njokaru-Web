import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const expertise = [
  {
    title: "Landscape Design and Installation",
    description:
      "We create custom landscape designs tailored to your specific needs and preferences, then bring them to life with expert installation.",
  },
  {
    title: "Sustainable Garden Planning",
    description:
      "Our sustainable garden plans focus on native plants, water conservation, and creating habitats for local wildlife.",
  },
  {
    title: "Hardscaping and Outdoor Living Spaces",
    description:
      "We design and build beautiful patios, walkways, retaining walls, and outdoor kitchens to extend your living space outdoors.",
  },
  {
    title: "Plant Selection and Care",
    description:
      "Our horticulturists select the perfect plants for your environment and provide expert care to ensure they thrive.",
  },
  {
    title: "Irrigation Systems",
    description:
      "We design and install efficient irrigation systems to keep your landscape healthy while conserving water.",
  },
  {
    title: "Lawn Maintenance and Renovation",
    description:
      "From regular maintenance to complete lawn renovations, we keep your grass looking lush and healthy.",
  },
];

export function OurExpertise() {
  return (
    <section className="mb-16 ">
      <h2 className="text-3xl font-bold mb-6 text-secondary-dark font-serif">
        Our Expertise
      </h2>
      <Accordion type="single" collapsible className="w-full font-serif">
        {expertise.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
