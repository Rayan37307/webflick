import Image from "next/image";

const Clients = () => {
  return (
    <section className="bg-white py-16 md:py-20 inter">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl semibold text-gray-800 geist">
          Our Clients
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Empowering you to take charge of your financial future with intuitive
          tools and personalized insights.
        </p>
        <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-8 sm:gap-12 md:gap-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:flex-wrap md:justify-center">
          <Image
            src="/images/client-1.svg"
            alt="Client 1"
            width={170}
            height={40}
            className="snap-center shrink-0"
          />
          <Image
            src="/images/client-2.svg"
            alt="Client 2"
            width={142}
            height={33}
            className="snap-center shrink-0"
          />
          <Image
            src="/images/client-3.svg"
            alt="Client 3"
            width={167}
            height={40}
            className="snap-center shrink-0"
          />
          <Image
            src="/images/client-4.svg"
            alt="Client 4"
            width={133}
            height={32}
            className="snap-center shrink-0"
          />
          <Image
            src="/images/client-5.svg"
            alt="Client 5"
            width={98}
            height={38}
            className="snap-center shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
