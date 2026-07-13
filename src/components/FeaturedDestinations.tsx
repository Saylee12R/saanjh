"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

interface Destination {
  title: string;
  state: string;
  category: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    title: "Ajanta Caves",
    state: "Maharashtra",
    category: "UNESCO Site",
    image: "/ajanta.png",
    description: "Witness ancient Buddhist rock-cut monuments, adorned with expressive murals and carvings dating back to the 2nd century BCE.",
  },
  {
    title: "Hampi",
    state: "Karnataka",
    category: "Ruins & Forts",
    image: "/hero.png",
    description: "Walk through the awe-inspiring stone ruins of the Vijayanagara Empire, showcasing spectacular monolithic monuments.",
  },
  {
    title: "Konark Sun Temple",
    state: "Odisha",
    category: "Temples",
    image: "/konark.png",
    description: "Admire the 13th-century engineering marvel sculpted as a colossal solar chariot dedicated to the Sun God.",
  },
  {
    title: "Golden Temple",
    state: "Punjab",
    category: "Sacred Spaces",
    image: "/golden_temple.png",
    description: "Experience the serene spiritual beauty of Sri Harmandir Sahib, reflecting elegance on its surrounding sacred pool.",
  },
  {
    title: "Nalanda University",
    state: "Bihar",
    category: "Monasteries",
    image: "/nalanda.png",
    description: "Explore the ruins of one of the ancient world's greatest centers of higher learning and Buddhist scholarship.",
  },
  {
    title: "Sanchi Stupa",
    state: "Madhya Pradesh",
    category: "UNESCO Site",
    image: "/sanchi.png",
    description: "Discover the oldest stone structure in India, commissioned by Emperor Ashoka to house sacred Buddhist relics.",
  },
];

export const FeaturedDestinations: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="explore" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary">
            Curated Expeditions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
            Featured Heritage Landmarks
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-secondary leading-relaxed font-light">
            Every stone holds an echo of the past. Explore six of India&apos;s most significant cultural marvels, chosen for their architectural brilliance and historical narratives.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border/50 hover:shadow-[0_20px_50px_rgba(138,90,68,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider bg-white/95 text-brand-primary px-3.5 py-1.5 rounded-full shadow-sm">
                  {dest.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  {/* Location Info */}
                  <div className="flex items-center space-x-1.5 text-xs text-brand-secondary">
                    <MapPin className="h-3.5 w-3.5 text-brand-accent" />
                    <span>{dest.state}, India</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-brand-text group-hover:text-brand-primary transition-colors flex items-center justify-between">
                    {dest.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-primary" />
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-base text-brand-secondary font-light leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-xs tracking-wider uppercase font-semibold text-brand-accent group-hover:text-brand-primary transition-colors">
                    Explore Stories
                  </span>
                  <span className="text-xs text-brand-secondary/60 font-light">12 chapters</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
