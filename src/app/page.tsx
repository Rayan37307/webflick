import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Get from "@/components/Get";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Works />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Get />
      <Footer />
    </main>
  );
}
