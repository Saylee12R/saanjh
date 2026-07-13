import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { Categories } from "@/components/Categories";
import { WhySaanjh } from "@/components/WhySaanjh";
import { QuoteSection } from "@/components/QuoteSection";
import { AiPreview } from "@/components/AiPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Sticky Transparent Navbar */}
      <Navbar />

      {/* Main Page Layout Wrapper */}
      <main className="flex flex-col flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Destinations */}
        <FeaturedDestinations />

        {/* 4. Explore by Category */}
        <Categories />

        {/* 5. Why Saanjh */}
        <WhySaanjh />

        {/* 6. Quote Section */}
        <QuoteSection />

        {/* 7. AI Preview Section */}
        <AiPreview />
      </main>

      {/* 8. Footer */}
      <Footer />
    </>
  );
}
