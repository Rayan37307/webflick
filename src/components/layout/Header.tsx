"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-black/50" : "bg-black/30"} backdrop-blur-md ring-1 ring-white/10`}>
      <div className="py-4 px-4 md:px-10 lg:px-28 flex justify-between items-center text-white">
        <div className="flex items-center">
          <Image src="/images/logo.svg" alt="Webflic logo" width={190} height={31} />
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-block bg-[#7B39FC] text-white py-2 px-4 rounded-lg ">Contact Us</a>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/20"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-4 pt-2 pb-4">
          <div className="rounded-xl bg-black/60 ring-1 ring-white/10 backdrop-blur">
            <nav className="flex flex-col divide-y divide-white/10">
              <Link href="/" className="px-4 py-3 hover:bg-white/5">Home</Link>
              <Link href="/portfolio" className="px-4 py-3 hover:bg-white/5">Portfolio</Link>
              <Link href="/about" className="px-4 py-3 hover:bg-white/5">About</Link>
              <Link href="/services" className="px-4 py-3 hover:bg-white/5">Services</Link>
              <Link href="/contact" className="px-4 py-3 hover:bg-white/5 text-purple-300">Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


