export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  featured?: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Is my financial data secure?",
    answer: "Yes, we take data security very seriously. We use industry-standard encryption, secure servers, and follow best practices to protect your information. Your data is never shared with third parties without your explicit consent.",
    category: "Security"
  },
  {
    id: "2",
    question: "What devices can I use Webflick services on?",
    answer: "Our services are designed to work seamlessly across all devices and platforms. Whether you're using a desktop computer, tablet, or mobile phone, you'll have full access to all features and functionality.",
    category: "Technical"
  },
  {
    id: "3",
    question: "Does Webflick connect directly to my existing systems?",
    answer: "Yes, we offer comprehensive integration services. We can connect to most popular platforms including CRM systems, payment gateways, analytics tools, and more through APIs and custom integrations.",
    category: "Integration"
  },
  {
    id: "4",
    question: "How quickly can you deliver my project?",
    answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during the initial consultation.",
    category: "Timeline"
  },
  {
    id: "5",
    question: "What is your revision process?",
    answer: "We include unlimited revisions during the design phase and up to 3 revision rounds during development. Additional revisions can be accommodated for an additional fee. We work closely with you to ensure complete satisfaction.",
    category: "Process"
  },
  {
    id: "6",
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support. Support plans start at $99/month.",
    category: "Support"
  },
  {
    id: "7",
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! We offer SEO optimization, content strategy, social media management, and digital advertising services. Our marketing team works closely with our design and development teams for integrated solutions.",
    category: "Marketing"
  },
  {
    id: "8",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, PayPal, and cryptocurrency payments. We offer flexible payment terms including milestone-based payments for larger projects.",
    category: "Billing"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Parrish",
    role: "Project Manager",
    company: "TechFlow Solutions",
    content: "The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs and the team's responsiveness has been exceptional throughout the entire process.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3826f3.png",
    featured: true
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateX",
    content: "Webflick transformed our online presence completely. The new website not only looks amazing but has increased our conversion rate by 40%. Their attention to detail is unmatched.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3826f3.png"
  },
  {
    id: "3",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthLab",
    content: "Working with Webflick was a game-changer for our business. They delivered ahead of schedule and the quality exceeded our expectations. Highly recommended for any serious business.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3826f3.png"
  },
  {
    id: "4",
    name: "David Rodriguez",
    role: "Founder",
    company: "StartupHub",
    content: "The team's expertise in both design and development is remarkable. They guided us through every step of the process and delivered a solution that perfectly matches our vision.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3826f3.png"
  },
  {
    id: "5",
    name: "Emily Watson",
    role: "Operations Manager",
    company: "FinanceFlow",
    content: "Exceptional service and outstanding results. Our new platform has streamlined our operations and improved customer satisfaction significantly. Worth every penny invested.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3826f3.png"
  }
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "⚡",
    title: "Visionary Leadership",
    description: "Forward-thinking approach to design and development, staying ahead of industry trends and technologies."
  },
  {
    id: "2",
    icon: "👥",
    title: "Customer-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations."
  },
  {
    id: "3",
    icon: "🎯",
    title: "Proven Track Record",
    description: "Over 500+ successful projects delivered for clients ranging from startups to Fortune 500 companies."
  },
  {
    id: "4",
    icon: "🚀",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and frameworks to build scalable, secure, and high-performance solutions."
  },
  {
    id: "5",
    icon: "🎨",
    title: "Design Excellence",
    description: "Award-winning designs that not only look beautiful but also provide exceptional user experiences."
  },
  {
    id: "6",
    icon: "⚙️",
    title: "Agile Process",
    description: "Flexible development methodology that allows for rapid iterations and continuous improvement."
  }
];

export const clients: Client[] = [
  {
    id: "1",
    name: "TechFlow",
    logo: "/images/client-techflow.svg",
    website: "https://techflow.com"
  },
  {
    id: "2",
    name: "InnovateX",
    logo: "/images/client-innovatex.svg",
    website: "https://innovatex.com"
  },
  {
    id: "3",
    name: "GrowthLab",
    logo: "/images/client-growthlab.svg",
    website: "https://growthlab.com"
  },
  {
    id: "4",
    name: "StartupHub",
    logo: "/images/client-startuphub.svg",
    website: "https://startuphub.com"
  },
  {
    id: "5",
    name: "FinanceFlow",
    logo: "/images/client-financeflow.svg",
    website: "https://financeflow.com"
  }
];

export const companyStats = [
  {
    id: "1",
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries"
  },
  {
    id: "2",
    value: "98%",
    label: "Client Satisfaction",
    description: "Customer satisfaction rate based on project completion surveys"
  },
  {
    id: "3",
    value: "5+",
    label: "Years Experience",
    description: "Years of combined experience in design and development"
  },
  {
    id: "4",
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock support for all our premium clients"
  }
];

export const contactInfo = {
  email: "hello@webflick.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Design Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "USA"
  },
  social: {
    twitter: "https://twitter.com/webflick",
    linkedin: "https://linkedin.com/company/webflick",
    instagram: "https://instagram.com/webflick",
    facebook: "https://facebook.com/webflick",
    dribbble: "https://dribbble.com/webflick",
    behance: "https://behance.net/webflick"
  }
};
