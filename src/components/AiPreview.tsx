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
    <section className="py-24 md:py-32 bg-[#1F1F1F] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-brand-accent animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-accent">
              Interactive History
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Conversational Heritage Guides
          </h2>

          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed font-light">
            Ask complex queries, dissect mythological architectural styles, and cross-examine chronological events. Saanjh's fine-tuned historical AI processes primary archaeological journals to answer with unparalleled accuracy.
          </p>

          {/* Coming Soon badge */}
          <div className="pt-2">
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Right Side: Mock Chat Interface */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-2xl mx-auto">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl bg-brand-accent/20 flex items-center justify-center border border-brand-accent/30">
                  <Bot className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm tracking-wide">Saanjh Assistant</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-white/50 font-sans uppercase font-medium tracking-wider">Ready to guide</span>
                  </div>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-white/20" />
            </div>

            {/* Chat Body */}
            <div className="p-6 min-h-[320px] flex flex-col justify-end space-y-4 font-sans text-sm md:text-base">
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
                    <div className="bg-brand-primary/20 border border-brand-primary/30 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="font-light">Tell me about Hampi.</p>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-white" />
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
                    <div className="bg-white/5 border border-white/10 text-white/70 rounded-2xl rounded-tl-none px-4 py-3.5 flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
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
                    <div className="bg-white/5 border border-white/10 text-white/95 rounded-2xl rounded-tl-none px-5 py-4 max-w-[85%] space-y-2">
                      <p className="font-light leading-relaxed">
                        Hampi was once the magnificent capital of the 14th-century Vijayanagara Empire. Spanning over 4,100 hectares near the Tungabhadra River, it was one of the world's largest and richest medieval cities.
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
            <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center gap-4">
              <input
                type="text"
                disabled
                placeholder="Ask about dynamic timelines..."
                className="bg-transparent border-none outline-none w-full text-white/40 placeholder-white/20 text-sm font-light disabled:cursor-not-allowed"
              />
              <button disabled className="p-2 rounded-xl bg-white/5 text-white/20 disabled:cursor-not-allowed">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
