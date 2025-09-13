export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies?: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "TechFlow – Web App Interface Design",
    description:
      "Designed a sleek, user-friendly web app interface for TechFlow, enhancing usability and improving customer engagement.",
    image: "/images/portfolio-1-1ead6b.png",
    category: "Web Design",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    id: "2",
    title: "FinFlow – Financial Dashboard Design",
    description:
      "Created a comprehensive financial dashboard with intuitive data visualization and modern interface design.",
    image: "/images/portfolio-2-60d9eb.png",
    category: "Dashboard",
    technologies: ["Next.js", "Chart.js", "Framer Motion"],
    link: "#"
  },
  {
    id: "3",
    title: "InnovateExpo – Event Platform Design",
    description:
      "Developed a modern event platform interface with seamless user experience and engaging visual elements.",
    image: "/images/portfolio-3-4ef278.png",
    category: "Platform",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: "4",
    title: "WebChain – Blockchain Interface",
    description:
      "Built a cutting-edge blockchain platform interface with focus on security and user experience.",
    image: "/images/portfolio-1-1ead6b.png",
    category: "Blockchain",
    technologies: ["React", "Web3.js", "Ethereum"],
    link: "#"
  },
  {
    id: "5",
    title: "Frilly – E-commerce Platform",
    description:
      "Designed and developed a modern e-commerce platform with seamless shopping experience.",
    image: "/images/portfolio-2-60d9eb.png",
    category: "E-commerce",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    link: "#"
  },
  {
    id: "6",
    title: "Canvus – Creative Portfolio",
    description:
      "Created a stunning portfolio website for creative professionals with interactive elements.",
    image: "/images/portfolio-3-4ef278.png",
    category: "Portfolio",
    technologies: ["Webflow", "GSAP", "CSS Grid"],
    link: "#"
  }
];

export const portfolioCategories = [
  "All",
  "Web Design",
  "Dashboard",
  "Platform",
  "Blockchain",
  "E-commerce",
  "Portfolio"
];
