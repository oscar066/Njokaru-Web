import Image from "next/image";
import { Button } from "@/components/ui/button";

import aboutImage from "../../../../public/Assets/jason-dent.jpg";

export default function AboutUsHero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <Image
        src={aboutImage}
        alt="Garden background"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Our Story of Growth
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              From humble beginnings to becoming your trusted partner in
              creating beautiful, sustainable gardens.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Our Mission
            </Button>
            <Button
              variant="outline"
              className="text-gray-800 border-white hover:bg-white hover:text-green-800"
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
