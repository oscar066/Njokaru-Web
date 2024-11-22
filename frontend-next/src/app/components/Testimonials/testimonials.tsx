"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, Testimonial } from "./testimonials-data";

export function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Our <span className="text-green-700">Clients Say</span>
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}'s photo`}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {testimonial.name}
        </h3>
        <p className="text-gray-600 mb-2">{testimonial.position}</p>
        <div
          className="flex items-center mb-4"
          aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 italic">{testimonial.testimonial}</p>
      </CardContent>
    </Card>
  );
}
