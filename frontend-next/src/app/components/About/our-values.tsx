'use client'

import React, { useState } from "react";
import { Leaf, Sprout, Sun, Users, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We prioritize eco-friendly practices and materials in all our projects.",
    details: "Our commitment to sustainability goes beyond just using eco-friendly materials. We implement water-saving irrigation systems, promote native plant species, and design landscapes that reduce energy consumption."
  },
  {
    icon: Sprout,
    title: "Growth",
    description: "We nurture growth in plants, our team, and our clients' visions.",
    details: "Growth is at the heart of everything we do. We continuously educate our team on the latest horticultural practices, foster the growth of diverse plant ecosystems, and help our clients' ideas flourish into beautiful realities."
  },
  {
    icon: Sun,
    title: "Innovation",
    description: "We constantly seek new and creative solutions in landscaping.",
    details: "Innovation drives our designs and practices. We incorporate cutting-edge technologies like smart irrigation systems, experiment with vertical gardens, and explore new sustainable materials to push the boundaries of landscape design."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting relationships with our clients and the community.",
    details: "Our commitment to community extends beyond our clients. We participate in local green initiatives, offer educational workshops on sustainable gardening, and contribute to community garden projects to foster a greener, more connected neighborhood."
  },
];

export function OurValues() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-secondary-dark font-serif">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-primary/10 pb-4">
                  <CardTitle className="flex items-center text-lg text-primary">
                    <value.icon className="mr-3 h-8 w-8" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-700 mb-4">{value.details}</p>
                  </motion.div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`value-details-${index}`}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

