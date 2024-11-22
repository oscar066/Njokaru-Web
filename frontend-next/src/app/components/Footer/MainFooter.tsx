import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contacts" },
  { label: "Products", href: "/products" },
];

const socialLinks: SocialLink[] = [
  { icon: FaFacebook, href: "https://www.facebook.com/" },
  { icon: FaTwitter, href: "https://twitter.com/" },
  { icon: FaInstagram, href: "https://www.instagram.com/" },
];

function MainFooter() {
  return (
    <footer className="bg-green-800 text-white font-serif leading-loose">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto py-10 px-5 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">
            NJOKARU
          </h4>
          <p className="text-gray-300 mb-4">
            Creating and maintaining beautiful outdoor spaces.
          </p>
          <Link
            href="/services"
            className="text-green-500 hover:text-green-300 transition-colors duration-300"
          >
            Explore Our Services
          </Link>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">
            Contact Us
          </h4>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaEnvelope className="mr-2" /> njokaru@gardening.com
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaPhone className="mr-2" /> +254 719686913
          </p>
          <p className="text-gray-300 mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> EdenVille Phase 1, Kiambu, Kenya
          </p>
          <p className="text-gray-300 mb-4 flex items-center">
            <FaClock className="mr-2" /> Mon - Fri: 9:00 AM - 5:00 PM
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.icon.name.replace("Fa", "")}`}
                className="text-2xl transition-colors duration-300 hover:text-green-500"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="text-xl font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-300 transition-colors duration-300 hover:text-green-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
