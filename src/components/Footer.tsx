"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

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
    <footer className="bg-white border-t border-brand-border/60 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Column 1: Brand & Newsletter */}
        <div className="md:col-span-5 space-y-6">
          <span className="font-serif text-2xl font-bold text-brand-primary">Saanjh</span>
          <p className="font-sans text-sm md:text-base text-brand-secondary leading-relaxed font-light max-w-sm">
            Saanjh is an AI-powered digital museum dedicated to discovering, documenting, and preserving the rich historical tapestry of Indian heritage.
          </p>
          <div className="space-y-3 pt-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-text block">
              Subscribe to Chronicles
            </span>
            <div className="flex max-w-sm rounded-full border border-brand-border p-1 bg-[#FAF7F2]/50 hover:bg-white focus-within:border-brand-primary transition-all duration-300">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm font-sans text-brand-text placeholder-brand-secondary/60"
              />
              <button className="h-9 w-9 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/95 transition-all cursor-pointer">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-text block">
            Navigation
          </span>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
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

        {/* Column 3: Legal & Support */}
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-text block">
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
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-text block">
            Connect
          </span>
          <ul className="space-y-3 font-sans text-sm text-brand-secondary font-light">
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-brand-accent shrink-0" />
              <Link href="mailto:curator@saanjh.in" className="hover:text-brand-primary">
                curator@saanjh.in
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="h-4 w-4 text-brand-accent shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                GitHub Repository
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 pt-8 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-brand-secondary/60 font-light">
        <p>© {currentYear} Saanjh Initiative. Every Place Has a Story.</p>
        <p className="flex space-x-4">
          <span>Curated with craft in India</span>
        </p>
      </div>
    </footer>
  );
};
