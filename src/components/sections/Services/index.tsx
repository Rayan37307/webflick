import Image from "next/image";

const Services = () => {
  const services = [
    {
      image: "/images/service-1-30c59a.png",
      title: "Product Design",
      description:
        "Our subscription-based design service gives you access to a dedicated team.",
    },
    {
      image: "/images/service-2.png",
      title: "Graphic Design",
      description:
        "Our subscription-based design service gives you access to a dedicated team.",
    },
    {
      image: "/images/service-3.png",
      title: "Marketing Design",
      description:
        "Our subscription-based design service gives you access to a dedicated team.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 inter">
      <div className="container mx-auto text-center px-4 md:px-6">
        <div className="inline-flex items-center gap-2 py-1 px-3 border border-purple-300 rounded-full">
          <Image
            src="/images/icon-star-circle.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="text-purple-800  medium">Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl  bold text-gray-800 mt-4  inter">
          Get expert solutions for every design need
        </h2>
      </div>

      <div className="container mx-auto mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 px-4 md:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl  bold text-gray-800  inter">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
              <Image
                src="/images/icon-arrow-right.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>

            {/* Fixed height image container */}
            <div className="relative mt-8 w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
