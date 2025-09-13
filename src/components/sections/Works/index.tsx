import Image from "next/image";

const Works = () => {
  const portfolioItems = [
    {
      image: "/images/portfolio-1-1ead6b.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
    {
      image: "/images/portfolio-4-4b9a6f.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
    {
      image: "/images/portfolio-5-7ffcf5.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
    {
      image: "/images/portfolio-6-590582.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
    {
      image: "/images/portfolio-3-4ef278.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
    {
      image: "/images/portfolio-2-60d9eb.png",
      title: "TechFlow – Web App Interface Design",
      description:
        "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 inter">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h3 className="text-purple-600  bold">PROJECTS</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl  semibold text-gray-800 mt-2  geist">
          Our selected projects
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Empowering you to take charge of your financial future with intuitive
          tools and personalized insights.
        </p>
      </div>

      <div className="container mx-auto mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-4 md:px-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Image container with fixed height */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Card content */}
            <div className="p-6 sm:p-7 md:p-8">
              <h4 className="text-xl sm:text-2xl  semibold text-gray-800  figtree">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
