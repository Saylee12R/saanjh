"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "Categories", href: "#categories" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-[#FAF7F2]/80 backdrop-blur-md border-b border-brand-border/40 shadow-sm py-4"
        : "bg-gradient-to-b from-black/55 via-black/15 to-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span
            className={`font-serif text-2xl font-medium tracking-wide tracking-tight transition-colors duration-300 ${isScrolled ? "text-brand-primary" : "text-white"
              }`}
          >
            Saanjh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide relative group transition-all duration-300 ${isScrolled
                ? "text-brand-text/80 hover:text-brand-primary"
                : "text-white/90 hover:text-white hover:-translate-y-0.5"
                }`}
            >
              {link.label}
              <span className={`absolute left-0 bottom-[-4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-brand-primary" : "bg-white"
                }`} />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#signin"
            className={`text-sm font-medium transition-colors duration-300 ${isScrolled
              ? "text-brand-text/80 hover:text-brand-primary"
              : "text-white/90 hover:text-white"
              }`}
          >
            Sign In
          </Link>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-brand-text hover:text-brand-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF7F2] shadow-2xl z-40 transform transition-transform duration-700 ease-out border-l border-brand-border md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-xl font-medium text-brand-text hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-[1px] bg-brand-border/60 my-2" />
            <Link
              href="#signin"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-brand-text hover:text-brand-primary transition-colors"
            >
              Sign In
            </Link>
          </div>

          <div>
            <Button variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
