"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";

const Hero = () => {
  return (
    <section className="relative h-screen text-white">
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 flex flex-col h-full">
        <Header />

        <main className="flex-grow flex flex-col items-center justify-center pt-16 md:pt-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight md:leading-tight max-w-6xl lg:max-w-[87rem]">
            Modern, Scalable & Creative <span className="italic font-extralight">Web Design</span> for Your
            Business.
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-xl sm:max-w-2xl">
            From custom full-stack solutions to WordPress, Webflow &
            Shopify—Webflick builds websites that convert.
          </p>
          <button className="mt-6 bg-[#7B39FC] text-white py-2.5 px-5 md:py-3 md:px-6 rounded-lg text-lg md:text-xl  bold hover:bg-purple-700">
            Book a Call
          </button>
          
        </main>
        <div className="relative flex md:justify-center gap-4 md:gap-8 pb-8 md:pb-16 px-4 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[305px] md:h-[400px] rounded-2xl overflow-hidden transform -translate-y-3 md:-translate-y-6 hover:-translate-y-6 md:hover:-translate-y-10 transition-all duration-500 shadow-2xl snap-center shrink-0">
            <Image
              src="/images/portfolio-1-1ead6b.png"
              alt="Portfolio 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="relative w-[230px] h-[320px] sm:w-[270px] sm:h-[360px] md:w-[321px] md:h-[420px] rounded-2xl overflow-hidden transform hover:-translate-y-6 md:hover:-translate-y-10 transition-all duration-500 shadow-2xl snap-center shrink-0">
            <Image
              src="/images/portfolio-2-60d9eb.png"
              alt="Portfolio 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="relative w-[240px] h-[340px] sm:w-[280px] sm:h-[400px] md:w-[320px] md:h-[450px] rounded-2xl overflow-hidden transform -translate-y-3 md:-translate-y-6 hover:-translate-y-6 md:hover:-translate-y-10 transition-all duration-500 shadow-2xl snap-center shrink-0">
            <Image
              src="/images/portfolio-3-4ef278.png"
              alt="Portfolio 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
