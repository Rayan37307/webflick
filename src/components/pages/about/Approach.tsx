import Image from "next/image";

const Approach = () => {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-20">
      <div className="mx-auto px-4 md:px-6" style={{ maxWidth: 1148 }}>
        {/* Collage on top (per Figma) */}
        <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
          {/* Left column: two tall portraits */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full rounded-2xl overflow-hidden sm:h-[360px] lg:h-[440px]">
              <Image src="/images/figma/about_portrait_1.png" alt="Portrait" fill className="object-cover" />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden sm:h-[260px] lg:h-[300px]">
              <Image src="/images/figma/about_portrait_2.png" alt="Team" fill className="object-cover" />
            </div>
          </div>
          {/* Right column: two landscape images */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full rounded-2xl overflow-hidden sm:h-[260px] lg:h-[272px]">
              <Image src="/images/figma/about_right_top.png" alt="Meeting" fill className="object-cover" />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden sm:h-[260px] lg:h-[272px]">
              <Image src="/images/figma/about_right_bottom.png" alt="Workers" fill className="object-cover" />
            </div>
          </div>

          {/* Overlay pill per Figma */}
          <div className="pointer-events-none absolute left-[15px] bottom-6">
            <div className="flex items-center justify-between rounded-full bg-white/90 shadow-md ring-1 ring-black/5 px-4 py-3" style={{ width: 319, height: 76 }}>
              <div className="relative h-10 w-10 rounded-full" style={{ background: "#6030FF" }}>
                <div className="absolute right-1 top-1 h-3 w-3 rounded-full" style={{ background: "#FFD950" }} />
              </div>
              <span className="text-sm text-gray-900 ml-2">Empowering Brands Through Creative Design Solutions</span>
            </div>
          </div>
        </div>

        {/* Text below collage (per Figma) */}
        <div className="mt-10 md:mt-16 space-y-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Our Story</h3>
            <p className="mt-4 text-gray-600">
              SnapDesign was founded with a simple mission: to make high-quality design accessible, affordable, and
              efficient for businesses around the world. We saw a gap in the market—companies needing constant design
              support without the overhead of hiring an in-house team or dealing with the unpredictability of freelance
              designers. That’s when we created SnapDesign, a subscription-based design service offering unlimited design
              requests and revisions, all at a flat monthly rate.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              We make high-quality design accessible, affordable, and efficient. Businesses get ongoing design support
              without the overhead. Predictable, fast, and collaborative—so teams can scale their brand consistently.
            </p>
          </div>
        </div>
      </div>

      {/* Impact section per Figma */}
      <div className="container mx-auto px-4 md:px-6 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative w-full h-[420px] sm:h-[520px] md:h-[640px] rounded-2xl overflow-hidden">
          <Image src="/images/figma/about_large_impact.png" alt="Impact" fill className="object-cover" />
        </div>
        <div className="space-y-3">
          <div className="text-sm font-bold text-purple-600 tracking-wider">SERVICES</div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            What we stand for
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xl font-semibold">Creativity</h4>
              <p className="mt-2 text-gray-600">We push the boundaries to deliver fresh concepts that capture your brand.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Efficiency</h4>
              <p className="mt-2 text-gray-600">1–2 day turnarounds without compromising on quality.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Collaboration</h4>
              <p className="mt-2 text-gray-600">We work closely with you so every design meets your vision.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Stats per Figma */}
      <div className="container mx-auto px-4 md:px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
            Our Impact in Numbers and
            Proven Success Through Design
          </h3>
          <p className="text-gray-600 max-w-prose">
            We offer flat-rate pricing so you can plan your design needs without worrying about extra costs.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div className="text-5xl md:text-6xl font-semibold">290+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="h-24 w-px bg-gray-300/30" />
          <div>
            <div className="text-5xl md:text-6xl font-semibold">3,600+</div>
            <div className="text-gray-600">Designs Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;


