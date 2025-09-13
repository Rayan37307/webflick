import React from "react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-16 md:py-20  inter mb-50">
      <div className="container mx-auto flex-col flex justify-center gap-10 md:gap-16 items-center px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  normal  poppins">
            Want a Free Demo?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-center text-gray-400  sora max-w-2xl mx-auto">
            Experience the Benefits Firsthand with a Free Personalized Demo.
            Fill out the form and we will reach out to you.
          </p>
        </div>
        <div className="bg-[#05081b] border-[1px] border-[#1C244C] rounded-3xl w-full md:w-[85%] lg:w-[65vw] p-6 sm:p-7 md:p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your first name"
                  className="bg-[#0a0e29] rounded-lg p-3 border-[1px] border-[#1C244C]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your last name"
                  className="bg-[#0a0e29] rounded-lg p-3 border-[1px] border-[#1C244C]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                  className="bg-[#0a0e29] rounded-lg p-3 border-[1px] border-[#1C244C]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2">
                  Phone number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-[#0a0e29] rounded-lg p-3 border-[1px] border-[#1C244C]"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="subject" className="mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Write your subject"
                  className="bg-[#0a0e29] rounded-lg p-3 border-[1px] border-[#1C244C]"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="mb-2">
                  Write Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  className="bg-[#0a0e29] rounded-lg p-3 h-32 border-[1px] border-[#1C244C]"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 md:mt-8 w-full bg-[#3A6EF2] text-white  semibold py-2.5 md:py-3 rounded-lg"
            >
              Submit your Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
