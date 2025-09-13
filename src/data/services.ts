export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  price?: {
    starting: number;
    currency: string;
  };
}

export const services: Service[] = [
  {
    id: "1",
    title: "Product Design",
    description:
      "Our subscription-based design service gives you access to a dedicated team of expert designers who understand your vision.",
    icon: "🎨",
    gradient: "from-red-500 to-purple-500",
    features: [
      "UI/UX Design",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Usability Testing"
    ],
    price: {
      starting: 2500,
      currency: "USD"
    }
  },
  {
    id: "2",
    title: "Graphic Design",
    description:
      "Complete visual identity and branding solutions that make your business stand out in the competitive market.",
    icon: "🎭",
    gradient: "from-blue-500 to-green-500",
    features: [
      "Brand Identity",
      "Logo Design",
      "Print Design",
      "Digital Assets",
      "Brand Guidelines"
    ],
    price: {
      starting: 1500,
      currency: "USD"
    }
  },
  {
    id: "3",
    title: "Marketing Design",
    description:
      "Strategic design solutions that drive engagement and convert visitors into customers through compelling visuals.",
    icon: "📈",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Social Media Graphics",
      "Ad Campaigns",
      "Landing Pages",
      "Email Templates",
      "Marketing Materials"
    ],
    price: {
      starting: 1200,
      currency: "USD"
    }
  },
  {
    id: "4",
    title: "Web Development",
    description:
      "Full-stack development solutions using modern technologies to build scalable and performant web applications.",
    icon: "💻",
    gradient: "from-green-500 to-blue-500",
    features: [
      "Custom Web Apps",
      "E-commerce Development",
      "CMS Integration",
      "API Development",
      "Performance Optimization"
    ],
    price: {
      starting: 5000,
      currency: "USD"
    }
  },
  {
    id: "5",
    title: "Mobile App Design",
    description:
      "Native and cross-platform mobile app designs that provide exceptional user experiences on all devices.",
    icon: "📱",
    gradient: "from-orange-500 to-red-500",
    features: [
      "iOS App Design",
      "Android App Design",
      "Cross-platform UI",
      "App Prototyping",
      "App Store Assets"
    ],
    price: {
      starting: 3500,
      currency: "USD"
    }
  },
  {
    id: "6",
    title: "Consultation",
    description:
      "Strategic design and technology consultation to help you make informed decisions about your digital presence.",
    icon: "🧠",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "Design Audit",
      "Technology Stack Review",
      "Strategic Planning",
      "Team Training",
      "Process Optimization"
    ],
    price: {
      starting: 150,
      currency: "USD"
    }
  }
];

export const serviceCategories = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Consultation"
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements."
  },
  {
    step: 2,
    title: "Strategy",
    description: "We develop a comprehensive strategy and roadmap tailored to your specific needs."
  },
  {
    step: 3,
    title: "Design",
    description: "Our team creates stunning designs that align with your brand and user expectations."
  },
  {
    step: 4,
    title: "Development",
    description: "We bring designs to life with clean, efficient code and modern technologies."
  },
  {
    step: 5,
    title: "Launch",
    description: "We deploy your project and ensure everything works perfectly across all platforms."
  },
  {
    step: 6,
    title: "Support",
    description: "Ongoing maintenance and support to keep your digital presence running smoothly."
  }
];
