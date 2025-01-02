import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/bethmidrachchurch",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/bethmidrachchurch",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/bethmidrachchurch",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/bethmidrachchurch",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500 transition-colors"
          aria-label={`Follow us on ${link.name}`}
        >
          <link.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};
