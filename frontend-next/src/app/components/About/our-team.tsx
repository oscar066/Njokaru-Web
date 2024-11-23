import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Jane Doe",
    role: "Founder & Lead Landscaper",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Jane has over 20 years of experience in landscape design and is passionate about creating sustainable outdoor spaces.",
  },
  {
    name: "John Smith",
    role: "Senior Horticulturist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "John specializes in native plant species and has contributed to several award-winning garden designs.",
  },
  {
    name: "Emily Brown",
    role: "Sustainable Design Specialist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Emily combines her background in environmental science with landscape design to create eco-friendly outdoor environments.",
  },
  {
    name: "Michael Johnson",
    role: "Hardscape Expert",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Michael excels in creating stunning patios, walkways, and retaining walls that complement the natural landscape.",
  },
  {
    name: "Sarah Lee",
    role: "Client Relations Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sarah ensures that every client receives personalized attention and that their vision is brought to life.",
  },
];

export function OurTeam() {
  const [showAllTeamMembers, setShowAllTeamMembers] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team
          .slice(0, showAllTeamMembers ? team.length : 3)
          .map((member, index) => (
            <Card key={index} className="hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <Image
                  src={member.image || "placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-muted-foreground mb-4">
                  {member.role}
                </p>
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
  );
}
