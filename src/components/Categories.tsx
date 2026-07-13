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
} from "lucide-react";

interface Category {
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: Category[] = [
  {
    name: "Temples",
    count: 142,
    icon: Compass, // Elegant guide to spiritual layouts
  },
  {
    name: "Forts",
    count: 85,
    icon: Castle, // Classic fort structure
  },
  {
    name: "Monasteries",
    count: 48,
    icon: Globe, // Peace/spiritual global centers
  },
  {
    name: "Museums",
    count: 67,
    icon: Library, // Historical archive vaults
  },
  {
    name: "UNESCO Sites",
    count: 42,
    icon: Landmark, // Core landmark/archeological tag
  },
  {
    name: "Mosques",
    count: 53,
    icon: Moon, // Islamic crescent/dome style indicator
  },
  {
    name: "Churches",
    count: 36,
    icon: Church, // Classic gothic/portuguese design indicator
  },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="categories" className="py-24 bg-white border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary">
            Heritage Classification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
            Explore by Category
          </h2>
          <p className="font-sans text-base text-brand-secondary leading-relaxed font-light">
            Filter and discover archaeological sites, structural monuments, and spiritual zones that suit your historical curiosity.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                variants={itemVariants}
                className="group flex flex-col items-center p-6 bg-[#FAF7F2]/60 hover:bg-white rounded-2xl border border-brand-border/30 hover:border-brand-primary/40 hover:shadow-[0_12px_30px_rgba(138,90,68,0.06)] transition-all duration-300 text-center cursor-pointer"
              >
                {/* Icon Wrapper */}
                <div className="h-16 w-16 rounded-full bg-white group-hover:bg-brand-primary/10 border border-brand-border/40 group-hover:border-brand-primary/20 flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                  <Icon className="h-7 w-7 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
                </div>

                {/* Info */}
                <h3 className="font-serif text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                  {cat.name}
                </h3>
                <span className="font-sans text-xs text-brand-secondary/80 font-light mt-1.5">
                  {cat.count} landmarks
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
