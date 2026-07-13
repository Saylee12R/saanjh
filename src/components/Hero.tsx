"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Search, X } from "lucide-react";
import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Scrim */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-brightness-[0.85]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8"
        >
          {/* Tagline */}
          <motion.span
            variants={itemVariants}
            className="text-xs md:text-sm font-semibold uppercase tracking-widest text-brand-accent/90 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            Saanjh Cultural Initiative
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight max-w-4xl"
          >
            Every Place Has a Story.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light"
          >
            Discover India&apos;s timeless heritage through immersive stories, historical landmarks, and unforgettable journeys.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
              onClick={() => {
                const exploreSection = document.getElementById("explore");
                if (exploreSection) {
                  exploreSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Heritage
            </Button>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <Play className="h-5 w-5 fill-white text-white" />
              Watch Story
            </button>
          </motion.div>

          {/* Floating Glass Search Bar */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl mt-8"
          >
            <div className="glass rounded-full px-6 py-4 flex items-center shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 group border border-white/30">
              <Search className="h-5 w-5 text-brand-primary/80 group-hover:text-brand-primary mr-3 transition-colors" />
              <input
                type="text"
                placeholder="Search heritage sites (e.g. Hampi, Ajanta, Golden Temple)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-brand-text placeholder-brand-secondary/70 font-sans text-base md:text-lg font-light focus:ring-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Watch Story Modal Video Backdrop Overlay */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-white hover:text-brand-accent p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex flex-col justify-center items-center p-8 relative"
            >
              {/* Fallback elegant card in place of actual video stream */}
              <div className="absolute inset-0 bg-cover bg-center filter blur-md opacity-40" style={{ backgroundImage: `url('/hero.png')` }} />
              <div className="relative z-10 text-center space-y-4 text-white p-6 max-w-md">
                <Play className="h-16 w-16 text-brand-accent mx-auto animate-pulse" />
                <h3 className="font-serif text-2xl font-bold">The Chronicles of Hampi</h3>
                <p className="text-white/80 text-sm font-sans font-light">
                  A high-fidelity immersive journey through the monolithic structures, whispering ruins, and the rich history of the Vijayanagara Empire.
                </p>
                <div className="text-xs uppercase text-brand-accent tracking-widest font-semibold pt-4">
                  Audio-visual Guide Coming Soon
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
