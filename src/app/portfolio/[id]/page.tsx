"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";

export default function WorkDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params?.id[0] : (params?.id as string | undefined);

  const item = useMemo(() => portfolioItems.find((p) => p.id === id) ?? portfolioItems[0], [id]);

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <Header />

      {/* Background ribbons (per design system) */}
      <div className="pointer-events-none absolute inset-x-0 top-24 h-64 opacity-40 blur-[300px]"
        style={{ background: "linear-gradient(90deg, #7980FD, #455CFF, #80E2FD)" }} />

      {/* Top title block */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-6 pt-36 md:pt-44">
        <div className="text-center">
          <h1 className="text-[36px] md:text-[64px] font-medium leading-[1.15] tracking-[-3%]">{item.title.split(" – ")[0]} Website Design</h1>
          <p className="mt-4 text-[#4B4757] max-w-[675px] mx-auto">
            A vibrant marketplace website for artists to showcase and sell their artwork, with a focus on user engagement and discovery.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
          <div className="rounded-xl ring-1 ring-black/10 bg-white/60 backdrop-blur px-6 py-5 w-[265px]">
            <div className="text-[#0A0D11]/90 text-base font-medium">Client Name</div>
            <div className="text-sm text-[#0A0D11]/60">Mangrove International</div>
          </div>
          <div className="rounded-xl ring-1 ring-black/10 bg-white/60 backdrop-blur px-6 py-5 w-[265px]">
            <div className="text-[#0A0D11]/90 text-base font-medium">Project Type</div>
            <div className="text-sm text-[#0A0D11]/60">Website Design</div>
          </div>
          <div className="rounded-xl ring-1 ring-black/10 bg-white/60 backdrop-blur px-6 py-5 w-[358px]">
            <div className="text-[#0A0D11]/90 text-base font-medium">Project Duration</div>
            <div className="text-sm text-[#0A0D11]">June 23rd, 2024 - November 12th, 2024</div>
          </div>
        </div>
      </section>

      {/* Framed screenshot block 1 */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-6 mt-12">
        <div className="relative rounded-[32px] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20 blur-[250px]" style={{
            background: "linear-gradient(90deg, #EF4444, #D946EF, #6366F1, #F59E0B)"
          }} />
          <div className="relative z-10 p-5">
            <div className="relative w-full rounded-[24px] overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview / Objectives with second framed shot */}
      <section className="max-w-[1000px] mx-auto px-4 md:px-6 mt-16 md:mt-20 space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Project Overview:</h2>
          <p className="mt-3 text-[#4B4757]">
            {`Artistry Market is a vibrant online marketplace designed to empower artists by giving them a platform to showcase and sell their artwork.
            The goal was to create an engaging, visually dynamic website that not only highlights the creativity of the artists but also provides a seamless user experience for potential buyers.`}
          </p>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Design Objectives:</h3>
            <p className="mt-3 text-[#4B4757]">
              {`Create an engaging, visually dynamic experience that highlights creativity while remaining highly usable and performant.`}
            </p>
          </div>

          <div className="relative rounded-[32px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-20 blur-[250px]" style={{
              background: "linear-gradient(90deg, #EF4444, #D946EF, #6366F1, #F59E0B)"
            }} />
            <div className="relative z-10 p-5">
              <div className="relative w-full rounded-[24px] overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <div className="text-lg font-medium">Creative, Visual Appeal:</div>
              <p className="text-[#4B4757] mt-2">Bold colors, high-resolution imagery, and clean layouts keep focus on the artwork.</p>
            </div>
            <div>
              <div className="text-lg font-medium">User-Friendly Navigation:</div>
              <p className="text-[#4B4757] mt-2">Intuitive browsing, search, and filters to help users find pieces by medium, style, price, and artist.</p>
            </div>
            <div>
              <div className="text-lg font-medium">Mobile Responsiveness:</div>
              <p className="text-[#4B4757] mt-2">Flawless experiences across devices, with careful attention to performance.</p>
            </div>
            <div>
              <div className="text-lg font-medium">Engagement & Discovery Features:</div>
              <p className="text-[#4B4757] mt-2">Curated collections, featured artists, reviews, and personalized recommendations.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="mt-3 space-y-3 text-[#4B4757]">
            <li>Artist Profiles with portfolios and social links</li>
            <li>Advanced Search and Filters by medium, style, price, and artist</li>
            <li>Art Discovery Section with curated collections and recommendations</li>
            <li>Secure Checkout integrated with multiple payment gateways</li>
            <li>Responsive Design for seamless experiences on any device</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Outcome:</h3>
          <p className="mt-3 text-[#4B4757]">
            {`The final design combines functionality and aesthetic appeal, attracting both artists and buyers. The vibrant design draws attention to the artwork while intuitive navigation and smooth checkout increase sales and satisfaction.`}
          </p>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 md:px-6 mt-16 mb-20 flex justify-center">
        <Link href="/portfolio" className="text-sm text-gray-600 hover:text-gray-900 underline">Back to Portfolio</Link>
      </section>

      <Footer />
    </main>
  );
}


