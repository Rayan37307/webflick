const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 opacity-40 blur-[300px]" style={{
        background: "linear-gradient(90deg, #7980FD, #455CFF, #80E2FD)"
      }} />
      <div className="relative z-10 max-w-[949px] mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
        <h1 className="text-[42px] sm:text-[56px] md:text-[64px] leading-[1.15] tracking-[-3%] font-medium text-gray-900">About SnapDesign</h1>
        <p className="mt-4 text-base sm:text-lg text-[#0A0E28]/80 max-w-[621px] mx-auto">
          Delivering high-quality, on-demand designs with speed and precision. Elevate your brand effortlessly, one snap at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;


