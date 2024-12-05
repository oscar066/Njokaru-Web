import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function OurMission() {
  return (
    <section className="mb-2">
      <h2 className="text-3xl font-bold mb-6 text-secondary-dark font-serif">
        Our Mission
      </h2>
      <Card className="border border-primary-light bg-primary-light/10 shadow-md">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed text-gray-600 font-serif">
            At Njokaru, we strive to create harmonious outdoor environments that
            enhance the beauty of nature while promoting sustainability and
            biodiversity. Our mission is to bring the joy of gardening to every
            home and community we serve, while educating our clients about the
            importance of eco-friendly landscaping practices.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
