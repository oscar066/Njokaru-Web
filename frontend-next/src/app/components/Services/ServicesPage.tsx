'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import serviceData from './servicesData';

interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
}

const ServicesPage2: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

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
              <CardFooter>
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
                    <DialogClose asChild>
                      <Button className="mt-4 bg-green-700 hover:bg-green-600 text-white">Close</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage2;