import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  id: string;
}

const team: TeamMember[] = [
  {
    id: "jane-doe",
    name: "Jane Doe",
    role: "Founder & Lead Landscaper",
    image: "/Assets/devon.jpg",
    bio: "Jane has over 20 years of experience in landscape design and is passionate about creating sustainable outdoor spaces.",
  },
  {
    id: "john-smith",
    name: "John Smith",
    role: "Senior Horticulturist",
    image: "/Assets/devon.jpg",
    bio: "John specializes in native plant species and has contributed to several award-winning garden designs.",
  },
  {
    id: "emily-brown",
    name: "Emily Brown",
    role: "Sustainable Design Specialist",
    image: "/Assets/devon.jpg",
    bio: "Emily combines her background in environmental science with landscape design to create eco-friendly outdoor environments.",
  },
  {
    id: "michael-johnson",
    name: "Michael Johnson",
    role: "Hardscape Expert",
    image: "/Assets/devon.jpg",
    bio: "Michael excels in creating stunning patios, walkways, and retaining walls that complement the natural landscape.",
  },
  {
    id: "sarah-lee",
    name: "Sarah Lee",
    role: "Client Relations Manager",
    image: "/Assets/devon.jpg",
    bio: "Sarah ensures that every client receives personalized attention and that their vision is brought to life.",
  },
] as const;

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <Card className="hover:scale-105 transition-transform">
    <CardContent className="pt-6">
      <Image
        src={member.image || "placeholder.svg"}
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
);

export function OurTeam() {
  const [showAllTeamMembers, setShowAllTeamMembers] = useState(false);
  const displayedTeam = showAllTeamMembers ? team : team.slice(0, 3);

  return (
    <section className="mb-16" aria-labelledby="our-team-heading">
      <h2 id="our-team-heading" className="sr-only">
        Our Team
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedTeam.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      {team.length > 3 && (
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAllTeamMembers(!showAllTeamMembers)}
            variant={"outline"}
          >
            {showAllTeamMembers ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show More
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
