'use client'

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'

export function OurMission() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="mb-2" aria-labelledby="our-mission-heading">
      <h2 
        id="our-mission-heading" 
        className="text-3xl font-bold mb-6 text-secondary-dark font-serif"
      >
        Our Mission
      </h2>
      <Card className="bg-primary-light/10 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <motion.p 
            className="text-lg leading-relaxed text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            At Njokaru, we strive to create harmonious outdoor environments that
            enhance the beauty of nature while promoting sustainability and
            biodiversity. Our mission is to bring the joy of gardening to every
            home and community we serve, while educating our clients about the
            importance of eco-friendly landscaping practices.
          </motion.p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="space-y-4 mb-4 text-gray-600">
                  <li>• Create sustainable and beautiful outdoor spaces</li>
                  <li>• Promote biodiversity in urban and suburban areas</li>
                  <li>• Educate clients on eco-friendly gardening practices</li>
                  <li>• Foster a connection between people and nature</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="mt-4 text-secondary-dark border-secondary-dark hover:bg-secondary-dark hover:text-green-900"
            aria-expanded={isExpanded}
            aria-controls="mission-details"
          >
            {isExpanded ? (
              <>
                Read Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

