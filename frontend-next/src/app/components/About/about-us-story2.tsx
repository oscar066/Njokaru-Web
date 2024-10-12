import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About NJOKARU</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2010, NJOKARU began as a small startup with a big vision: to revolutionize the way people interact with technology. Our journey started in a tiny garage, fueled by passion and countless cups of coffee. Today, we've grown into a global leader in innovative solutions, but our core mission remains unchanged.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe in the power of technology to transform lives and businesses. Our team of dedicated professionals works tirelessly to create cutting-edge products that simplify complex problems and open new possibilities for our clients.
            </p>
            <Button>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="NJOKARU team at work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of what's possible, embracing new ideas and technologies to stay ahead of the curve.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork, fostering a culture of open communication and shared success.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, setting high standards and consistently delivering quality results.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            At NJOKARU, our mission is to empower individuals and organizations through innovative technology solutions. We are committed to creating products that enhance efficiency, foster creativity, and drive positive change in the world.
          </p>
          <Button variant="outline">
            Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}