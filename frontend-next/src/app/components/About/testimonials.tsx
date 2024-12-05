import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alice Williams",
    comment:
      "Njokaru transformed our backyard into a beautiful oasis. We couldn't be happier with the result!",
    rating: 4,
  },
  {
    name: "Robert Chen",
    comment:
      "The team's knowledge of native plants and sustainable practices really impressed us. Our garden is thriving!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    comment:
      "Professional, creative, and a pleasure to work with. Njokaru exceeded our expectations.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-secondary-dark font-serif">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 font-serif">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg">
            <CardContent className="text-center">
              <p className="mb-4 text-muted-foreground">
                {testimonial.comment}
              </p>
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
  );
}
