'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LeafIcon, TargetIcon, ShieldCheckIcon, LightbulbIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const storyItems = [
  {
    title: "Our History",
    content: "Founded in 2010, NJOKARU has grown from a small local gardening service to a comprehensive landscaping solution provider. Our journey has been marked by continuous learning, innovation, and a deep commitment to our clients and the environment.",
    image: "/placeholder.svg?height=300&width=500",
    milestones: [
      { year: 2010, event: "NJOKARU founded as a local gardening service" },
      { year: 2015, event: "Expanded services to include full landscape design" },
      { year: 2018, event: "Introduced sustainable landscaping practices" },
      { year: 2020, event: "Launched commercial landscaping division" },
      { year: 2023, event: "Achieved carbon-neutral operations" }
    ]
  },
  {
    title: "Our Mission",
    content: "To create and maintain beautiful, sustainable outdoor spaces that enhance the quality of life for our clients and communities. We strive to blend nature's beauty with innovative design, fostering environments that inspire and rejuvenate.",
    image: "/placeholder.svg?height=300&width=500",
    goals: [
      "Promote biodiversity in urban environments",
      "Reduce water consumption through smart landscaping",
      "Educate clients on sustainable gardening practices",
      "Create outdoor spaces that improve mental and physical well-being"
    ]
  }
]

const values = [
  { name: "Sustainability", Icon: LeafIcon, description: "We prioritize eco-friendly practices and materials in all our projects." },
  { name: "Excellence", Icon: TargetIcon, description: "We strive for the highest quality in every aspect of our work." },
  { name: "Integrity", Icon: ShieldCheckIcon, description: "We maintain honesty and transparency in all our dealings." },
  { name: "Innovation", Icon: LightbulbIcon, description: "We continuously seek new and creative solutions in landscaping." }
]

export default function OurStory() {
  const [expandedValue, setExpandedValue] = React.useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h1>
        
        <div className="space-y-20">
          {storyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-green-700">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
                    {item.milestones && (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="milestones">
                          <AccordionTrigger>View Our Milestones</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc list-inside space-y-2">
                              {item.milestones.map((milestone, idx) => (
                                <li key={idx} className="text-sm text-gray-600">
                                  <span className="font-semibold">{milestone.year}:</span> {milestone.event}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                    {item.goals && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2 text-green-700">Our Goals:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {item.goals.map((goal, idx) => (
                            <li key={idx} className="text-sm text-gray-600">{goal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={500} 
                      height={300} 
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-green-700">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <value.Icon className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                  <CardTitle>{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{value.description}</CardDescription>
                </CardContent>
                <div 
                  className={`absolute inset-0 bg-green-600 text-white p-4 transition-all duration-300 ease-in-out ${
                    expandedValue === value.name ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="text-sm">{value.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => setExpandedValue(expandedValue === value.name ? null : value.name)}
                >
                  {expandedValue === value.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle description</span>
                </Button>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

