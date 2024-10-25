import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import React from "react"

// Custom Milestone components
const MilestoneList = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <ol className={`relative border-l border-gray-200 ${className}`}>{children}</ol>
)

const MilestoneItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-10 ml-6">{children}</li>
)

const MilestoneIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
    {children}
  </span>
)

const Milestone = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-1 ml-4">{children}</div>
)

export default function AboutUsStory() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">NJOKARU: Innovating Since 2010</h2>
            <p className="text-lg text-muted-foreground mb-6">
              NJOKARU was born from a simple idea: to create technology that truly enhances people&apos;s lives. Founded in 2010 by a group of passionate engineers and designers, we&apos;ve grown from a small startup to a global innovator.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our journey has been one of continuous learning, relentless innovation, and unwavering commitment to our users. Today, NJOKARU stands at the forefront of technological advancement, always pushing the boundaries of what&apos;s possible.
            </p>
            <Button size="lg">Learn More About Our Mission</Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="NJOKARU team working together"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
        <MilestoneList className="max-w-3xl mx-auto">
          <MilestoneItem>
            <MilestoneIcon>
              <div className="size-2 rounded-full bg-primary" />
            </MilestoneIcon>
            <Milestone>
              <h3 className="text-xl font-semibold">2010: The Beginning</h3>
              <p className="text-muted-foreground">NJOKARU is founded in a small garage with a team of five visionaries.</p>
            </Milestone>
          </MilestoneItem>
          <MilestoneItem>
            <MilestoneIcon>
              <div className="size-2 rounded-full bg-primary" />
            </MilestoneIcon>
            <Milestone>
              <h3 className="text-xl font-semibold">2013: First Major Product Launch</h3>
              <p className="text-muted-foreground">Our flagship product revolutionizes the industry, gaining 1 million users in the first year.</p>
            </Milestone>
          </MilestoneItem>
          <MilestoneItem>
            <MilestoneIcon>
              <div className="size-2 rounded-full bg-primary" />
            </MilestoneIcon>
            <Milestone>
              <h3 className="text-xl font-semibold">2016: Global Expansion</h3>
              <p className="text-muted-foreground">NJOKARU opens offices in 5 countries, truly becoming a global player.</p>
            </Milestone>
          </MilestoneItem>
          <MilestoneItem>
            <MilestoneIcon>
              <div className="size-2 rounded-full bg-primary" />
            </MilestoneIcon>
            <Milestone>
              <h3 className="text-xl font-semibold">2020: A Decade of Innovation</h3>
              <p className="text-muted-foreground">Celebrating 10 years, NJOKARU launches its most ambitious project yet, aiming to transform how people interact with technology.</p>
            </Milestone>
          </MilestoneItem>
          <MilestoneItem>
            <MilestoneIcon>
              <div className="size-2 rounded-full bg-primary" />
            </MilestoneIcon>
            <Milestone>
              <h3 className="text-xl font-semibold">Today: Shaping the Future</h3>
              <p className="text-muted-foreground">With over 1000 employees worldwide and millions of users, NJOKARU continues to innovate and shape the future of technology.</p>
            </Milestone>
          </MilestoneItem>
        </MilestoneList>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            At NJOKARU, our mission is to create technology that empowers individuals and organizations to achieve more. We believe in innovation that matters, design that inspires, and solutions that transform.
          </p>
          <Button size="lg">Join Our Team</Button>
        </div>
      </div>
    </section>
  )
}