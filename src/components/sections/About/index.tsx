import Image from "next/image";

const About = () => {
  const features = [
    {
      icon: "/images/icon-visionary.svg",
      text: "Visionary Leadership",
    },
    {
      icon: "/images/icon-customer-centric.svg",
      text: "Customer-Centric Approach",
    },
    {
      icon: "/images/icon-proven-track.svg",
      text: "Proven Track Record",
    },
    {
      icon: "/images/icon-cutting-edge.svg",
      text: "Cutting-Edge Technology",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-4 md:px-6">
        <div className="relative w-full h-[360px] sm:h-[460px] md:h-[577px]">
          <Image
            src="/images/about-bg.png"
            alt="About background"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <Image
              src="/images/about-person.png"
              alt="About person"
              width={600}
              height={600}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl  bold  inter">
            Innovators at heart, partners in growth
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
            Our expertise lies in leveraging the latest tech trends to create
            scalable, innovative, and future-ready products.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={feature.icon} alt="" width={22} height={22} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
