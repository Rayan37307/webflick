import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$19",
      description: "It is simply dummy text of pricing.",
      features: [
        "Flexible Subscription Plans",
        "Customizable Feature Bundles",
        "Free Trial Period",
      ],
      buttonText: "Get Start Now",
      isPro: false,
    },
    {
      name: "Standard",
      price: "$19",
      description: "It is simply dummy text of pricing.",
      features: [
        "Flexible Subscription Plans",
        "Customizable Feature Bundles",
        "Free Trial Period",
        "Transparent Pricing Structure",
      ],
      buttonText: "Get Start Now",
      isPro: false,
    },
    {
      name: "Pro",
      price: "$19",
      description: "It is simply dummy text of pricing.",
      features: [
        "Flexible Subscription Plans",
        "Customizable Feature Bundles",
        "Free Trial Period",
        "Transparent Pricing Structure",
        "Advanced Scheduling",
      ],
      buttonText: "Get Started Now",
      isPro: true,
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 md:py-20  inter overflow-hidden">
      {/* Subtle radial spotlight background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.06), rgba(0,0,0,0))",
          }}
        />
      </div>
      <div className="container mx-auto text-center px-4 md:px-6 relative">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  normal  poppins">
          <span className="text-gray-300">Pricing</span>
          <span> & </span>
          <span className="text-white">Plans</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 max-w-2xl sm:max-w-3xl mx-auto  sora">
          Gain invaluable predictive analytics and actionable insights,
          empowering your team to make data-driven decisions and close deal.
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base">
          <span>Monthly billing</span>
          <div className="relative">
            <div className="w-12 sm:w-14 h-7 sm:h-8 bg-purple-600 rounded-full"></div>
            <div className="absolute top-1 left-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
          </div>
          <span>Annual billing</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-black text-sm  bold py-1 px-2 rounded-full">
            25% OFF
          </span>
        </div>
      </div>
      <div className="container mx-auto mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 px-4 md:px-6 relative">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black shadow-xl shadow-black/30 ring-1 ring-white/5`}
          >
            <div className="text-left">
              <h3 className="text-lg sm:text-xl  medium  inter text-white">{plan.name}</h3>
              <p className="text-gray-400 mt-2  inter text-sm sm:text-base">
                {plan.description}
              </p>
              
              <p className="text-4xl sm:text-5xl  bold mt-4  poppins">
                {plan.price}
                <span className="text-base sm:text-lg  normal">/month</span>
              </p>
              <button
                className="group mt-6 sm:mt-8 w-full py-2.5 sm:py-3 rounded-full  semibold text-white bg-transparent border border-gray-500/50 hover:bg-white/5 ring-1 ring-white/15"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  {plan.buttonText}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </button>
            </div>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4  inter text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
