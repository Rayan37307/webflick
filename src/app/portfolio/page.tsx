"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import Grid from "@/components/portfolio/Grid";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { useMemo, useState } from "react";

export default function PortfolioPage() {
  const items = portfolioItems;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="bg-black text-white">
        <Header />
        <PortfolioHero />
      </div>
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <Grid items={items} />
        </div>
      </section>
      <Footer />
    </main>
  );
}


