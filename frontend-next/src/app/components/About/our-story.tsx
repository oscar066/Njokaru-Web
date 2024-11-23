import React from "react";
import Image from "next/image";

import aboutImage from "../../../../public/Assets/devon.jpg";

export function OurStory() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-secondary-dark">Our Story</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-6 leading-relaxed text-gray-600">
            Founded in 2010, Njokaru has been transforming outdoor spaces into
            beautiful, sustainable gardens and landscapes. Our passion for
            nature and commitment to excellence have made us a trusted name in
            the gardening and landscaping industry.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            What started as a small team of passionate gardeners has grown into
            a full-service landscaping company, serving both residential and
            commercial clients. Our journey has been marked by a constant
            pursuit of innovation and sustainability in everything we do.
          </p>
        </div>
        <Image
          src={aboutImage}
          alt="Njokaru team working on a garden"
          width={600}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>
    </section>
  );
}
