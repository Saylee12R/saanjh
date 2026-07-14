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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24 md:mb-28 space-y-6"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] font-semibold text-brand-primary">
            CURATED EXPEDITIONS
          </span>
          <div className="w-24 h-px bg-brand-primary/30 mx-auto" />
          <h2 className="max-w-2xl mx-auto font-serif text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-brand-text">
            Discover India&apos;s
            <br />
            Timeless Heritage
          </h2>
          <p className="max-w-2xl mx-auto font-sans text-lg text-brand-secondary leading-8 font-light">
            Explore extraordinary destinations where architecture, mythology and history come together to tell stories that continue to shape India's cultural identity.
          </p>
        </motion.div>

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
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border/50 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-brand-bg">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 via-40% to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Category Badge */}
                <span className="absolute top-5 left-5 bg-white/15 backdrop-blur-xl border border-white/20 text-white text-[10px] uppercase tracking-[0.25em] font-medium px-4 py-2 rounded-full">
                  {dest.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-7 md:p-8 bg-[#FDFBF7]">

                {/* Accent Line */}
                <div className="w-12 h-[2px] bg-brand-accent rounded-full mb-6" />

                {/* Title */}
                <h3 className="font-serif text-[30px] leading-tight font-medium text-brand-text group-hover:text-brand-primary transition-colors">
                  {dest.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 mt-3 text-[14px] text-brand-secondary/80">
                  <MapPin className="h-4 w-4 text-brand-accent" />
                  <span>{dest.state}, India</span>
                </div>

                {/* Description */}
                <p className="mt-6 text-[15px] leading-7 text-brand-secondary font-light flex-1">
                  {dest.description}
                </p>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-brand-border/40 flex items-center justify-between">

                  <span className="text-[11px] uppercase tracking-[0.3em] text-brand-secondary">
                    {dest.category}
                  </span>

                  <button className="flex items-center gap-2 text-brand-primary font-medium group/button">

                    Begin Journey

                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />

                  </button>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  );
};
