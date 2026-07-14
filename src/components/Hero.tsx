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
        <div className="absolute inset-0 bg-gradient-to-b
from-black/55
via-black/30
to-black/60 backdrop-brightness-[0.85]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center text-white flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6 md:space-y-8"
        >


          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-semibold tracking-[0.12em] text-[#F8F4EC] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          >
            SAANJH
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className=" text-2xl md:text-4xl font-light tracking-wide text-white/95 "
          >
            Every Place Has a Story.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className=" font-sans text-base md:text-lg leading-8 max-w-lg text-white/80 font-light "
          >
            Explore India's living heritage through AI-powered storytelling,
            interactive maps, virtual experiences, and carefully curated cultural journeys.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 pt-2 items-center justify-center w-full sm:w-auto"
          >
            <Button
              className=" w-full sm:w-auto px-10 py-6 text-base rounded-full shadow-xl "
              variant="accent"
              size="lg"
              onClick={() => {
                const exploreSection = document.getElementById("explore");
                if (exploreSection) {
                  exploreSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Exploring
            </Button>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-9 py-6 rounded-full border  border-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto cursor-pointer"
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
            <div className=" flex items-center w-full rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-4 shadow-xl hover:bg-white/15 transition-all duration-300"
            >
              <Search className="h-5 w-5 text-white/50 mr-4" />
              <input
                type="text"
                placeholder="Search destinations, monuments or stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/50 outline-none text-lg font-light tracking-wide "
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
