"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, simply link your bank accounts so transactions automatically import.",
  },
  {
    question: "What devices can I use Mobit on?",
    answer:
      "Yes, simply link your bank accounts so transactions automatically import.",
  },
  {
    question: "Does Mobit connect directly to my bank?",
    answer:
      "Yes, simply link your bank accounts so transactions automatically import.",
  },
  {
    question: "How quickly do transactions show in Mobit?",
    answer:
      "Yes, simply link your bank accounts so transactions automatically import.",
  },
  {
    question: "How quickly do transactions show in Mobit?",
    answer:
      "Yes, simply link your bank accounts so transactions automatically import.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="bg-white py-16 md:py-20  inter">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl  bold text-gray-800  inter">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="container mx-auto mt-10 sm:mt-12 md:mt-16 max-w-2xl sm:max-w-3xl md:max-w-4xl px-4 md:px-0">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full flex justify-between items-center text-left text-lg sm:text-xl  semibold text-gray-800  inter"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{faq.question}</span>
                <Image
                  src="/images/icon-chevron-down.svg"
                  alt=""
                  width={14}
                  height={8}
                  className={`transform transition-transform ${open === index ? "rotate-180" : ""}`}
                />
              </button>
              {open === index && (
                <div className="mt-3 sm:mt-4 text-gray-600  sora text-sm sm:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600 text-sm sm:text-base">
          Have more questions? Contact our support
        </p>
      </div>
    </section>
  );
};

export default FAQ;
