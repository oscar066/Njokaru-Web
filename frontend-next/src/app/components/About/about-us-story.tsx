'use client'

import { useState } from 'react'
import { Leaf, Sprout, Sun, Users, ChevronDown, ChevronUp, Star } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutUs() {
  const [showAllTeamMembers, setShowAllTeamMembers] = useState(false)

  const values = [
    { icon: Leaf, title: "Sustainability", description: "We prioritize eco-friendly practices and materials in all our projects." },
    { icon: Sprout, title: "Growth", description: "We nurture growth in plants, our team, and our clients' visions." },
    { icon: Sun, title: "Innovation", description: "We constantly seek new and creative solutions in landscaping." },
    { icon: Users, title: "Community", description: "We build lasting relationships with our clients and the community." },
  ]

  const team = [
    { name: "Jane Doe", role: "Founder & Lead Landscaper", image: "/placeholder.svg?height=200&width=200", bio: "Jane has over 20 years of experience in landscape design and is passionate about creating sustainable outdoor spaces." },
    { name: "John Smith", role: "Senior Horticulturist", image: "/placeholder.svg?height=200&width=200", bio: "John specializes in native plant species and has contributed to several award-winning garden designs." },
    { name: "Emily Brown", role: "Sustainable Design Specialist", image: "/placeholder.svg?height=200&width=200", bio: "Emily combines her background in environmental science with landscape design to create eco-friendly outdoor environments." },
    { name: "Michael Johnson", role: "Hardscape Expert", image: "/placeholder.svg?height=200&width=200", bio: "Michael excels in creating stunning patios, walkways, and retaining walls that complement the natural landscape." },
    { name: "Sarah Lee", role: "Client Relations Manager", image: "/placeholder.svg?height=200&width=200", bio: "Sarah ensures that every client receives personalized attention and that their vision is brought to life." },
  ]

  const expertise = [
    { title: "Landscape Design and Installation", description: "We create custom landscape designs tailored to your specific needs and preferences, then bring them to life with expert installation." },
    { title: "Sustainable Garden Planning", description: "Our sustainable garden plans focus on native plants, water conservation, and creating habitats for local wildlife." },
    { title: "Hardscaping and Outdoor Living Spaces", description: "We design and build beautiful patios, walkways, retaining walls, and outdoor kitchens to extend your living space outdoors." },
    { title: "Plant Selection and Care", description: "Our horticulturists select the perfect plants for your environment and provide expert care to ensure they thrive." },
    { title: "Irrigation Systems", description: "We design and install efficient irrigation systems to keep your landscape healthy while conserving water." },
    { title: "Lawn Maintenance and Renovation", description: "From regular maintenance to complete lawn renovations, we keep your grass looking lush and healthy." },
  ]

  const testimonials = [
    { name: "Alice Williams", comment: "Njokaru transformed our backyard into a beautiful oasis. We couldn't be happier with the result!", rating: 4 },
    { name: "Robert Chen", comment: "The team's knowledge of native plants and sustainable practices really impressed us. Our garden is thriving!", rating: 5 },
    { name: "Maria Garcia", comment: "Professional, creative, and a pleasure to work with. Njokaru exceeded our expectations.", rating: 4 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="relative text-center mb-12 py-16 bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">About Njokaru</h1>
        <p className="text-lg max-w-3xl mx-auto">Transforming outdoor spaces into sustainable beauty since 2010.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-gray-600">
              Founded in 2010, Njokaru has been transforming outdoor spaces into beautiful, sustainable gardens and landscapes. Our passion for nature and commitment to excellence have made us a trusted name in the gardening and landscaping industry.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              What started as a small team of passionate gardeners has grown into a full-service landscaping company, serving both residential and commercial clients. Our journey has been marked by a constant pursuit of innovation and sustainability in everything we do.
            </p>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Njokaru team working on a garden"
            width={600}
            height={400}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Mission</h2>
        <Card className="border border-primary-light bg-primary-light/10 shadow-md">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-gray-600">
              At Njokaru, we strive to create harmonious outdoor environments that enhance the beauty of nature while promoting sustainability and biodiversity. Our mission is to bring the joy of gardening to every home and community we serve, while educating our clients about the importance of eco-friendly landscaping practices.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <value.icon className="mr-3 h-8 w-8 text-primary" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.slice(0, showAllTeamMembers ? team.length : 3).map((member, index) => (
            <Card key={index} className="hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-center text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {team.length > 3 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAllTeamMembers(!showAllTeamMembers)}
              variant="outline"
            >
              {showAllTeamMembers ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Team Members <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Expertise</h2>
        <Accordion type="single" collapsible className="w-full">
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

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg">
              <CardContent className="text-center">
                <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                <div className="flex justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}