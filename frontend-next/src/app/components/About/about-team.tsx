import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LinkedinIcon, X } from 'lucide-react';

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "John has over 20 years of experience in landscape design, bringing creativity and expertise to every project.",
    image: "/team/john-doe.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    bio: "Jane's innovative designs have won multiple awards and transformed countless outdoor spaces.",
    image: "/team/jane-smith.jpg",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    name: "Mike Johnson",
    role: "Operations Manager",
    bio: "Mike ensures smooth execution of projects, bringing efficiency and precision to every endeavor.",
    image: "/team/mike-johnson.jpg",
    social: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson"
    }
  },
  // Add more team members as needed
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-80">
                <Image 
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                    <LinkedinIcon size={24} />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
                    <X size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}