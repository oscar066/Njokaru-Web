import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  image: string
  socials: {
    facebook?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    socials: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    socials: {
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg?height=200&width=200",
    socials: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson",
    },
  },
  {
    name: "Sarah Williams",
    role: "UX Designer",
    image: "/placeholder.svg?height=200&width=200",
    socials: {
      facebook: "https://facebook.com/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams",
    },
  },
]

export default function Team() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.socials.facebook && (
                    <Link href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                  {member.socials.github && (
                    <Link href={member.socials.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}