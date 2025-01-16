import React from "react";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="mb-2">
      <h2 className="text-3xl font-bold mb-2 text-secondary-dark font-serif">Our Story</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-6 leading-relaxed text-gray-600 font-serif">
            Founded in 2010, Njokaru has been transforming outdoor spaces into
            beautiful, sustainable gardens and landscapes. Our passion for
            nature and commitment to excellence have made us a trusted name in
            the gardening and landscaping industry.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-600 font-serif">
            What started as a small team of passionate gardeners has grown into
            a full-service landscaping company, serving both residential and
            commercial clients. Our journey has been marked by a constant
            pursuit of innovation and sustainability in everything we do.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 font-serif">
            Today, we're proud to have completed over 500 projects across the region,
            earning numerous awards for our sustainable design practices and client
            satisfaction. Our team has grown to include certified horticulturists,
            landscape architects, and maintenance specialists who share our vision
            for creating harmony between nature and urban spaces.
          </p>
        </div>
        <Image
          src="/Assets/devon.jpg"
          alt="Njokaru team working on a garden"
          width={600}
          height={400}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>
    </section>
  );
}
