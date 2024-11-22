import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    bio: "John has over 15 years of experience in landscape design and business management. He founded NJOKARU with a vision to transform Kenya's outdoor spaces.",
    expertise: [
      "Landscape Design",
      "Business Strategy",
      "Sustainable Practices",
    ],
    education: "MBA in Sustainable Business, University of Nairobi",
    socials: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Jane leads our technology initiatives, focusing on innovative solutions for landscape management and client communication.",
    expertise: ["Software Development", "IoT in Agriculture", "Data Analytics"],
    education: "MSc in Computer Science, Kenyatta University",
    socials: {
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Mike Johnson",
    role: "Lead Horticulturist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mike's passion for plants and extensive knowledge of East African flora make him an invaluable asset to our design team.",
    expertise: ["Plant Selection", "Soil Science", "Xeriscaping"],
    education:
      "BSc in Horticulture, Jomo Kenyatta University of Agriculture and Technology",
    socials: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson",
    },
  },
  {
    name: "Sarah Williams",
    role: "Client Relations Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Sarah ensures our clients receive top-notch service from initial consultation to project completion and beyond.",
    expertise: ["Customer Service", "Project Management", "Communication"],
    education: "BA in Communications, University of Nairobi",
    socials: {
      facebook: "https://facebook.com/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams",
    },
  },
];

export default function Team() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {member.expertise.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Education:</span>{" "}
                  {member.education}
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                  {member.socials.facebook && (
                    <Link
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.github && (
                    <Link
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                </div>
                <Button variant="outline" className="w-full">
                  View Full Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
