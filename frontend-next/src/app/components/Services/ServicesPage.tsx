'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import serviceData from './servicesData'

interface ServiceData {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  details?: string
}

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null)
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Quote Request Submitted",
      description: `We've received your request for ${selectedService?.title}. We'll get back to you soon!`,
    })
    setIsQuoteDialogOpen(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            OUR <span className="text-green-700">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover tailored landscaping solutions to enhance your outdoor spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service: ServiceData) => (
            <Card key={service.id} className="transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <div className="text-4xl text-green-700 mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="link" 
                      className="text-green-700 hover:text-green-800 transition-colors duration-200"
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-gray-800 flex items-center">
                        <span className="text-4xl text-green-700 mr-4">{service.icon}</span>
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600">
                        {service.description}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="mt-4 max-h-[60vh]">
                      <p className="text-gray-700">
                        {service.details || "More details about this service will be available soon. Please check back later or contact us for more information."}
                      </p>
                    </ScrollArea>
                    <div className="mt-4 flex justify-between">
                      <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                      </DialogClose>
                      <Button 
                        className="bg-green-700 hover:bg-green-600 text-white"
                        onClick={() => {
                          setIsQuoteDialogOpen(true)
                          setSelectedService(service)
                        }}
                      >
                        Request Quote
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="outline" 
                  className="text-green-700 border-green-700 hover:bg-green-50"
                  onClick={() => {
                    setIsQuoteDialogOpen(true)
                    setSelectedService(service)
                  }}
                >
                  Request Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Quote for {selectedService?.title}</DialogTitle>
            <DialogDescription>
              Fill out this form and we'll get back to you with a custom quote for our {selectedService?.title} service.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleQuoteSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" type="tel" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Message
                </Label>
                <Textarea id="message" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-green-700 hover:bg-green-600 text-white">Submit Request</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ServicesPage