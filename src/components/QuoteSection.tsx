"use client";

import React from "react";
import { motion } from "framer-motion";

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex items-center justify-center border-t border-brand-border/40">
      {/* Editorial horizontal separator line styling */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-brand-primary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-brand-primary/30" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="font-serif italic text-lg text-brand-primary/80 block">
            Our Philosophy
          </span>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-text leading-tight max-w-4xl mx-auto">
            "We preserve <span className="font-bold text-brand-primary">stories</span>, not just monuments."
          </p>
          <div className="h-[2px] w-12 bg-brand-accent mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
