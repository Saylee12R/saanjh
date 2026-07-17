"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Explore Heritage", href: "#explore" },
    { label: "Landmark Categories", href: "#categories" },
    { label: "Curator Stories", href: "#stories" },
    { label: "Platform Mission", href: "#about" },
  ];

  const complianceLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Archival Policy", href: "#archival" },
  ];

  return (
    <footer className="bg-[#FCFAF7] border-t border-[#ECE4DA] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-11 justify-between gap-8 md:gap-10">
        {/* Column 1: Brand & Newsletter */}
        <div className="md:col-span-4 ">
          <div className="w-20 h-px bg-brand-primary/30 mb-8" />
          <span className="font-serif font-semibold text-[3.4rem] leading-none  tracking-tight text-brand-primary">Saanjh</span>
          <p className="mt-6 font-sans text-sm md:text-base text-[#7E746C] font-light max-w-[320px] leading-8 text-[15px]">
            Documenting and preserving India's living heritage for future generations.
          </p>
          <div className="mt-8 space-y-3 ">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-text block">
              STAY UPDATED
            </span>
            <div className="flex max-w-sm rounded-full border border-brand-border py-2 px-1  bg-[#FAF7F2]/50 hover:bg-white focus-within:border-brand-primary transition-all duration-300">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent border-none outline-none px-4 py-1 w-full text-sm font-sans text-brand-text placeholder:text-[#9A9087]"
              />
              <button className="h-10 w-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-[#8E5A3F] active:scale-95 transition"  >
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-2 space-y-4 pt-8">
          <span className="font-semibold text-brand-text tracking-[0.18em] text-[11px] uppercase block">
            Navigation
          </span>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group font-sans text-sm text-brand-secondary hover:translate-x-1 transition-transform transition-all duration-300 transition-colors font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div className="md:col-span-2 space-y-4 pt-8">
          <span className="tracking-[0.18em] text-[11px] uppercase font-semibold text-brand-text block">
            Legal & Trust
          </span>
          <ul className="space-y-3">
            {complianceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-brand-secondary hover:text-brand-primary transition-colors font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div className="md:col-span-2 space-y-5 pt-8">
          <span className="tracking-[0.18em] text-[11px] uppercase font-semibold text-brand-text block">
            Connect
          </span>

          <ul className="space-y-4 font-sans text-sm text-brand-secondary font-light">
            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-accent shrink-0" />
              <Link
                href="mailto:curator@saanjh.in"
                className="hover:text-brand-primary transition-colors"
              >
                curator@saanjh.in
              </Link>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-brand-accent shrink-0" />
              <span>Based in India</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-2">
            <Link
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaGithub className="text-[20px]" />
            </Link>

            <Link
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaInstagram className="text-[20px]" />
            </Link>

            <Link
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaXTwitter className="text-[20px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-brand-border/20">

        <div className="space-y-2">
          <p className="text-xs text-brand-secondary/50">
            © {currentYear} Saanjh
          </p>

          <p className="text-xs text-brand-secondary/50">
            Built to preserve India's stories.
          </p>
        </div>

      </div>
    </footer>
  );
};
