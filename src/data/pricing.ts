export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
    currency: string;
  };
  features: PricingFeature[];
  isPopular: boolean;
  buttonText: string;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for small businesses and startups getting started with professional design.",
    price: {
      monthly: 19,
      annual: 190,
      currency: "USD"
    },
    features: [
      { name: "Flexible Subscription Plans", included: true },
      { name: "Customizable Feature Bundles", included: true },
      { name: "Free Trial Period", included: true },
      { name: "Email Support", included: true },
      { name: "Basic Design Templates", included: true },
      { name: "Transparent Pricing Structure", included: false },
      { name: "Advanced Scheduling", included: false },
      { name: "Priority Support", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Team Collaboration", included: false }
    ],
    isPopular: false,
    buttonText: "Get Started Now"
  },
  {
    id: "standard",
    name: "Standard",
    description: "Ideal for growing businesses that need more advanced features and support.",
    price: {
      monthly: 49,
      annual: 490,
      currency: "USD"
    },
    features: [
      { name: "Flexible Subscription Plans", included: true },
      { name: "Customizable Feature Bundles", included: true },
      { name: "Free Trial Period", included: true },
      { name: "Email Support", included: true },
      { name: "Basic Design Templates", included: true },
      { name: "Transparent Pricing Structure", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Custom Branding", included: true },
      { name: "Advanced Scheduling", included: false },
      { name: "Priority Support", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Team Collaboration", included: false }
    ],
    isPopular: false,
    buttonText: "Get Started Now"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for established businesses that require premium features and dedicated support.",
    price: {
      monthly: 99,
      annual: 990,
      currency: "USD"
    },
    features: [
      { name: "Flexible Subscription Plans", included: true },
      { name: "Customizable Feature Bundles", included: true },
      { name: "Free Trial Period", included: true },
      { name: "Email Support", included: true },
      { name: "Basic Design Templates", included: true },
      { name: "Transparent Pricing Structure", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Custom Branding", included: true },
      { name: "Advanced Scheduling", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Team Collaboration", included: true },
      { name: "White-label Solutions", included: true },
      { name: "Dedicated Account Manager", included: true }
    ],
    isPopular: true,
    buttonText: "Get Started Now",
    badge: "Most Popular"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for large organizations with specific requirements.",
    price: {
      monthly: 199,
      annual: 1990,
      currency: "USD"
    },
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Custom Development", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "24/7 Phone Support", included: true },
      { name: "SLA Guarantee", included: true },
      { name: "On-premise Deployment", included: true },
      { name: "Custom Training", included: true },
      { name: "API Access", included: true },
      { name: "Security Compliance", included: true },
      { name: "Multi-region Support", included: true }
    ],
    isPopular: false,
    buttonText: "Contact Sales"
  }
];

export const pricingFeatures = {
  design: [
    "Custom UI/UX Design",
    "Responsive Web Design",
    "Mobile App Design",
    "Brand Identity Design",
    "Print Design",
    "Social Media Graphics"
  ],
  development: [
    "Custom Web Development",
    "E-commerce Development",
    "Mobile App Development",
    "API Integration",
    "Database Design",
    "Performance Optimization"
  ],
  support: [
    "24/7 Customer Support",
    "Project Management",
    "Quality Assurance",
    "Maintenance & Updates",
    "Training & Documentation",
    "Technical Consultation"
  ]
};

export const billingCycles = [
  {
    id: "monthly",
    label: "Monthly billing",
    discount: 0
  },
  {
    id: "annual",
    label: "Annual billing",
    discount: 25,
    badge: "25% OFF"
  }
] as const;

export type BillingCycle = typeof billingCycles[number]['id'];
