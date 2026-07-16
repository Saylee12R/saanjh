"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Compass,
  BookOpen,
  MapPinned,
  HeartHandshake
} from "lucide-react";

const features = [
  {
    icon: Compass,
    text: "Discover hidden heritage"
  },
  {
    icon: BookOpen,
    text: "Learn authentic history"
  },
  {
    icon: MapPinned,
    text: "Plan meaningful journeys"
  },
  {
    icon: HeartHandshake,
    text: "Help preserve culture"
  }
];

export function WhySaanjh() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#F4EFE8] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative h-[720px] max-w-[620px] rounded-[40px] overflow-hidden border border-[#D8CCBF] shadow-[0_45px_120px_rgba(35,22,15,0.22)] group">

              <Image
                src="/sanchi.real.jpeg"
                alt="Dhamek Stupa"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1800 group-hover:scale-[1.08]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 via-50% to-transparent" />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-10 left-10 text-white">

              <p className="tracking-[0.35em] text-xs uppercase opacity-90">
                UNESCO HERITAGE
              </p>

              <h3 className="mt-3 font-serif text-5xl">
                Dhamek Stupa
              </h3>

              <div className="mt-4 h-px w-24 bg-white/40" />

              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-white/85">
                Sarnath • Varanasi
              </p>

            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl lg:pl-12 lg:-mt-6"
          >

            <div className="flex items-center gap-5">

              <span className="uppercase tracking-[0.35em] text-xs font-semibold text-brand-primary">
                PRESERVING HISTORY
              </span>

              <div className="h-px flex-1 bg-brand-primary/20" />

            </div>

            <h2 className="mt-5 font-serif text-[52px] md:text-[56px] leading-[1.08] text-brand-text whitespace-nowrap">
              Beyond Monuments
              <br />
              Into Stories.
            </h2>
            <p className="mt-6 max-w-[500px] text-lg leading-8 text-brand-secondary">

              Saanjh brings together history, storytelling, and technology
              to preserve India's timeless monuments. Discover forgotten places,
              understand their stories, and experience heritage beyond the pages of a guidebook.

            </p>

            <div className="mt-8 flex flex-col gap-3">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className=" group flex items-center gap-4 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-white/70 hover:translate-x-2 "  >
                    <div className="h-10 w-10 rounded-full bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors" />
                    </div>

                    <span className="text-lg text-brand-text">
                      {item.text}
                    </span>
                  </div>
                );
              })}

            </div>

            <button
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-primary px-10 py-4 text-[15px] font-medium shadow-lg hover:shadow-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl "  >
              Discover Heritage

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}