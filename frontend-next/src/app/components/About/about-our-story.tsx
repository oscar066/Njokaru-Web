import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LeafIcon, TargetIcon, ShieldCheckIcon, LightbulbIcon } from 'lucide-react';

const storyItems = [
  {
    title: "Our History",
    content: "Founded in 2010, NJOKARU has grown from a small local gardening service to a comprehensive landscaping solution provider. Our journey has been marked by continuous learning, innovation, and a deep commitment to our clients and the environment.",
    image: "/images/history.jpg"
  },
  {
    title: "Our Mission",
    content: "To create and maintain beautiful, sustainable outdoor spaces that enhance the quality of life for our clients and communities. We strive to blend nature's beauty with innovative design, fostering environments that inspire and rejuvenate.",
    image: "/images/mission.jpg"
  }
];

const values = [
  { name: "Sustainability", Icon: LeafIcon },
  { name: "Excellence", Icon: TargetIcon },
  { name: "Integrity", Icon: ShieldCheckIcon },
  { name: "Innovation", Icon: LightbulbIcon }
];

export default function OurStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Story</h2>
        
        <div className="space-y-20">
          {storyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
              <div className="w-full md:w-1/2">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-lg"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-green-700">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <value.Icon className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{value.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}