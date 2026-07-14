"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Castle,
  Library,
  Landmark,
  Globe,
  Church,
  Moon,
  Compass,
  Crown,
  ArrowUpRight,
} from "lucide-react";

interface Category {
  name: string;
  count: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const categories: Category[] = [
  {
    name: "Temples",
    count: 142,
    description: "Sacred architecture & devotion.",
    icon: Compass,
  },
  {
    name: "Forts",
    count: 85,
    description: "Kingdoms and forgotten dynasties.",
    icon: Castle,
  },
  {
    name: "Monasteries",
    count: 48,
    description: "Meditation and learning.",
    icon: Globe,
  },
  {
    name: "Museums",
    count: 67,
    description: "Preserving cultural treasures.",
    icon: Library,
  },
  {
    name: "UNESCO Sites",
    count: 42,
    description: "World heritage landmarks.",
    icon: Landmark,
  },
  {
    name: "Mosques",
    count: 53,
    description: "Islamic architectural masterpieces.",
    icon: Moon,
  },
  {
    name: "Churches",
    count: 36,
    description: "Colonial spiritual heritage.",
    icon: Church,
  },
  {
    name: "Palaces",
    count: 31,
    description: "Royal grandeur preserved.",
    icon: Crown,
  }
];

export const Categories: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-gradient-to-b from-white via-[#FDFBF8] to-[#FAF7F2] border-t border-brand-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary">
            Heritage Classification
          </span>

          <div className="w-24 h-px bg-brand-primary/30 mx-auto" />

          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
            Explore by Category
          </h2>

          <p className="font-sans text-base text-brand-secondary leading-relaxed font-light">
            Filter and discover archaeological sites, structural monuments, and spiritual zones that suit your historical curiosity.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                custom={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group bg-[#FDFBF7] rounded-3xl border border-brand-border/40 p-3 hover:shadow-[0_35px_90px_rgba(63,39,28,0.12)] transition-all duration-700 cursor-pointer flex flex-col"
              >
                {/* Card */}

                <div className="relative flex flex-col h-full rounded-2xl bg-[#FCFAF6] border border-[#E8DED3] overflow-hidden transition-all duration-500 group-hover:bg-white">

                  {/* Top Accent */}
                  <div className="h-1 w-0 bg-brand-primary group-hover:w-full transition-all duration-700" />

                  {/* Icon */}
                  <div className="pt-5 px-5">

                    <div className="w-11 h-11 rounded-2xl bg-brand-primary/8 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">

                      <Icon className="h-5 w-5 text-brand-primary" />

                    </div>

                  </div>

                  {/* Body */}

                  <div className="flex-1 px-5 py-4">

                    <span className="font-serif text-[11px] tracking-[0.35em] text-brand-primary/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 font-serif text-[21px] md:text-[23px] leading-none font-medium text-brand-text">
                      {cat.name}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-brand-secondary">
                      {cat.description}
                    </p>

                  </div>

                  {/* Footer */}

                  <div className="border-t border-brand-border/40 px-5 py-3 flex items-center justify-between">

                    <div>

                      <p className="font-serif text-lg text-brand-text">
                        {cat.count}
                      </p>

                      <p className="uppercase tracking-[0.25em] text-[10px] text-brand-secondary">
                        Sites
                      </p>

                    </div>

                    <div className="flex items-center gap-2 text-brand-primary text-sm font-medium tracking-wide transition-all duration-300 group-hover:gap-3">

                      Explore

                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
