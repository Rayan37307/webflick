import Image from "next/image";

const highlights = [
  { icon: "/images/icon-visionary.svg", title: "Visionary Leadership", desc: "Bold strategy and forward-looking execution." },
  { icon: "/images/icon-customer-centric.svg", title: "Customer-Centric", desc: "Empathy-driven UX and measurable outcomes." },
  { icon: "/images/icon-proven-track.svg", title: "Proven Track", desc: "Real impact across industries and scales." },
  { icon: "/images/icon-cutting-edge.svg", title: "Cutting-Edge Tech", desc: "Modern stacks, performance, and resilience." },
];

const Highlights = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-3xl bg-gray-50 p-6 border border-gray-100">
              <Image src={h.icon} alt="" width={28} height={28} />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{h.title}</h3>
              <p className="mt-2 text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;


