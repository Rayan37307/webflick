import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" pt-16 md:pt-20  inter">

      <div className="container mx-auto mt-14 md:mt-20 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:colbg-black text-white-span-1">
            <Image
              src="/logo-dark.png"
              alt="Webflic logo"
              width={185}
              height={48}
            />
            <p className="mt-4 text-gray-400">
              Empowering you to take charge of your financial future with
              intuitive tools and personalized insights.
            </p>
          </div>
          <div>
            <h4 className=" semibold text-lg">Services</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web App Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mobile App Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Website Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" semibold text-lg">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" semibold text-lg">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-6 mt-10 md:mt-12">
        <h1 className="text-[28vw] sm:text-[24vw] md:text-[22vw]  font-black text-gray-500/17 leading-[0.8] tracking-tight">WEBFLICK</h1>
      </div>
    </footer>
  );
};

export default Footer;
