"use client";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    avatar: "/images/testimonial-avatar-3826f3.png",
    name: "Victoria Parrish",
    role: "Project Manager",
    rating: 5,
    quote:
      "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs.",
  },
  {
    avatar: "/images/testimonial-avatar-3826f3.png",
    name: "Daniel Carter",
    role: "CTO",
    rating: 5,
    quote:
      "A seamless experience from start to finish. Performance and reliability exceeded expectations across the board.",
  },
  {
    avatar: "/images/testimonial-avatar-3826f3.png",
    name: "Amelia Reed",
    role: "Founder, Studio AR",
    rating: 5,
    quote:
      "Incredible attention to detail and rapid iterations. Our team shipped faster and with more confidence.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-white py-16 md:py-20 relative  inter overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative px-4 md:px-6">
        <div className="relative flex justify-center">
          <div className="pointer-events-none absolute -bottom-10  -translate-x-1/2 translate-y-6 opacity-60">
            <Image src="/images/icon-bg-star.svg" alt="" width={160} height={160} />
          </div>
          <Image
            src={current.avatar}
            alt={current.name}
            width={220}
            height={220}
            className="relative z-10 rounded-2xl"
          />
        </div>
        <div>
          <div className="flex gap-1 text-yellow-400 text-xl sm:text-2xl">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <blockquote className="mt-3 sm:mt-4 text-2xl sm:text-3xl  bold text-gray-800  inter">
            “{current.quote}”
          </blockquote>
          <div className="mt-6">
            <p>{current.name} <span className="font-black text-3xl"> . </span><span className="text-gray-600">{current.role}</span></p>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <ArrowLeftCircleIcon />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <ArrowRightCircleIcon />
            </button>
            <div className="ml-2 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"}`}
                />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
