const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle blurred gradient ribbons per Figma */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 opacity-40 blur-3xl" style={{
        background: "linear-gradient(90deg, rgba(239,68,68,0.25), rgba(217,70,239,0.25), rgba(99,102,241,0.25), rgba(245,158,11,0.25))"
      }} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">Our Works</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering high-quality, on-demand designs with speed and precision. Elevate your brand effortlessly, one snap at a time.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;


