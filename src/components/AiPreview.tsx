"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User } from "lucide-react";

export const AiPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setActiveStep(1), 1000); // Show user message
    const timer2 = setTimeout(() => setActiveStep(2), 2200); // Show AI typing
    const timer3 = setTimeout(() => setActiveStep(3), 4000); // Show AI response

    // Reset loop every 12 seconds
    const interval = setInterval(() => {
      setActiveStep(0);
      setTimeout(() => setActiveStep(1), 1000);
      setTimeout(() => setActiveStep(2), 2200);
      setTimeout(() => setActiveStep(3), 4000);
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-20 md:py-20 bg-[#FBF8F5] text-[#2C241F] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="absolute left-[31%] top-28 w-64 h-64 rounded-full bg-[#F4EEE8] opacity-70 -z-10" />
        {/* Left Side: Content */}
        <div className="lg:col-span-5 space-y-14 relative">
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-brand-accent animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-accent">
              AI HERITAGE EXPERIENCE
            </span>
          </div>

          <h2 className="font-serif md:text-6xl xl:text-7xl font-bold tracking-tight tracking-[-0.04em] leading-[0.9] ">
            History,
            <br />
            You Can
            <br />
            Talk To
          </h2>

          <p className="max-w-[390px] font-sans text-base md:text-lg text-[#6F645B] leading-relaxed font-light">
            Explore India's heritage through natural conversations.
            Ask about architecture, dynasties, hidden legends, or plan your next journey.
          </p>

          {/* Coming Soon badge */}
          <div className="flex flex-wrap gap-3 pt-3">
            <span className="px-2.5 py-1 rounded-full bg-[#FBF7F3] border border-[#EFE6DD] text-xs">
              Monuments
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#FBF7F3] border border-[#EFE6DD] text-xs">
              Architecture
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#FBF7F3] border border-[#EFE6DD] text-xs">
              Dynasties
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#FBF7F3] border border-[#EFE6DD] text-xs">
              Hidden Stories
            </span>
          </div>
        </div>

        {/* Right Side: Mock Chat Interface */}
        <div className="lg:col-span-7 w-full lg:-translate-x-16 lg:translate-y-0">
          <div className="bg-white shadow-[0_20px_60px_rgba(44,36,31,0.08)] border border-[#F7F3EE] rounded-3xl overflow-hidden   w-full max-w-[700px] mx-auto">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-[#FCFAF7] border-b border-[#E9DED2]  flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl bg-[#F3E7D8] text-brand-primary flex items-center justify-center border border-brand-accent/30">
                  <Bot className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm tracking-wide">Saanjh Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-[#9B8B7E] font-sans uppercase font-medium tracking-wider">Historian AI</span>
                  </div>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-white/20" />
            </div>

            {/* Chat Body */}
            <div className="p-6 py-4 flex flex-col justify-end space-y-4 font-sans text-sm md:text-base">
              <AnimatePresence mode="popLayout">
                {/* User Message */}
                {activeStep >= 1 && (
                  <motion.div
                    key="user-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start space-x-3 justify-end"
                  >
                    <div className=" border border-brand-primary/30 bg-brand-primary/90 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[72%]">
                      <p className="font-light">Why are the musical pillars of Vittala Temple famous?</p>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-[#F3E7D8] text-brand-primary border border-white/10 flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-[#8B5E3C]" />
                    </div>
                  </motion.div>
                )}

                {/* AI Typing Indicator */}
                {activeStep === 2 && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="h-8 w-8 rounded-lg bg-brand-accent/15 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div className="bg-[#FAF6F1] text-[#8D7E72] border-[#F1E6D8]  rounded-2xl rounded-tl-none px-4 py-3.5 flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 bg-[#A9988C] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 bg-[#A9988C] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 bg-[#A9988C] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                {/* AI Response */}
                {activeStep >= 3 && (
                  <motion.div
                    key="ai-response"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="h-8 w-8 rounded-lg bg-brand-accent/15 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div className="bg-[#FAF6F1] border border-[#F1E6D8] text-[#43352C] rounded-2xl rounded-tl-none px-5 py-3 max-w-[92%] space-y-2">
                      <p className="font-light leading-7 text-[15px]">
                        The musical pillars of the Vittala Temple are known for producing musical notes when gently struck.
                        Built during the Vijayanagara Empire, they remain one of India's greatest engineering mysteries.
                      </p>
                      <p className="font-light text-xs text-brand-accent/80 leading-relaxed italic border-t border-white/5 pt-2">
                        Key elements include the Virupaksha Temple, monolithic Narasimha, and the musical stone pillars.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chat Input Mockup */}
            <div className="px-6 py-4 bg-[#FCFAF7] border-t border-[#E9DED2] flex items-center gap-4">
              <input
                type="text"
                disabled
                placeholder="Ask about dynamic timelines..."
                className="bg-transparent border-none outline-none w-full text-[#8D7E72] placeholder:text-[#A9988C] text-sm font-light disabled:cursor-not-allowed"
              />
              <button disabled className="p-2 rounded-full bg-[#F3E7D8] text-brand-primary  disabled:cursor-not-allowed">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
