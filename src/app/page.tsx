import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { Categories } from "@/components/Categories";
import { AiPreview } from "@/components/AiPreview";
import { WhySaanjh } from "@/components/WhySaanjh";
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

        {/* 5. AI Preview Section */}
        <AiPreview />

        {/* 6. Why Saanjh */}
        <WhySaanjh />


      </main>

      {/* 7. Footer */}
      <Footer />
    </>
  );
}
