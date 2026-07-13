"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Map, Shield } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: Feature[] = [
  {
    title: "Discover",
    description: "Unearth hidden archaeological gems, unknown local stories, and architectural mysteries that conventional tourist guidebooks overlook.",
    icon: Search,
  },
  {
    title: "Learn",
    description: "Immerse yourself in high-fidelity chronological timelines, ancient translations, and expert audio commentary compiled by historians.",
    icon: BookOpen,
  },
  {
    title: "Plan",
    description: "Structure your physical heritage paths with routes mapped directly to legendary accounts, local lore, and optimal seasonal timings.",
    icon: Map,
  },
  {
    title: "Preserve",
    description: "Participate in local crowdfunding campaigns, community-driven transcription projects, and digital mapping to keep history alive.",
    icon: Shield,
  },
];

export const WhySaanjh: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Left Column: Heading Info */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary">
              Our Digital Mission
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              A Living Archive for India&apos;s Legacy
            </h2>
            <p className="font-sans text-base text-brand-secondary leading-relaxed font-light">
              Saanjh bridges the gap between historical research and digital storytelling, creating a space where every monument is experienced as a rich story of human achievement.
            </p>
          </div>

          {/* Right Column: Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl border border-brand-border/40 flex flex-col space-y-4 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-brand-primary/5 flex items-center justify-center border border-brand-primary/10">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-text">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-brand-secondary font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
