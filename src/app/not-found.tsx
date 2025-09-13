"use client";

import Header from "../components/layout/Header";
import Footer from "../components/sections/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Always-blurred transparent header (reused) */}
      <Header />

      {/* Subtle gradient ribbons per Figma */}
      <div
        className="pointer-events-none absolute inset-x-0 top-44 h-64 opacity-40 blur-[300px]"
        style={{
          background: "linear-gradient(90deg, #7980FD, #455CFF, #80E2FD)",
        }}
      />

      <section className="relative z-10 max-w-[949px] mx-auto px-4 md:px-6 pt-36 pb-16 md:pt-44 md:pb-24 text-center">
        <div className="text-black/90 text-[128px] leading-none font-semibold select-none">404</div>
        <div className="mt-8 max-w-[623px] mx-auto">
          <h1 className="text-[40px] md:text-[56px] leading-tight tracking-[-4%] font-medium text-gray-900">
            Opps! Something went wrong
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#4B4757]">
            We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white ring-1 ring-white/20"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,13,17,1) 0%, rgba(51,51,51,1) 100%)",
              boxShadow: "inset 0 -4px 4px 0 rgba(0,0,0,0.45)",
            }}
          >
            Go Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


