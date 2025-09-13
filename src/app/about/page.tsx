"use client";

import Header from "../../components/layout/Header";
import Footer from "../../components/sections/Footer";
import AboutHero from "../../components/pages/about/AboutHero";
import Highlights from "../../components/pages/about/Highlights";
import Approach from "../../components/pages/about/Approach";
import Contact from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="bg-black text-white">
        <Header />
        <AboutHero />
      </div>
      {/* <Highlights /> */}
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}


