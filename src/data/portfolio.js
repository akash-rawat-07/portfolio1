export const personal = {
  name: "Alex Morgan",
  firstName: "Alex",
  roles: [
    "Full-Stack Developer",
    "UI Engineer",
    "Creative Technologist",
    "Product Builder",
  ],
  tagline:
    "I craft refined digital experiences at the intersection of engineering, design, and performance.",
  email: "hello@alexmorgan.dev",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
  ],
};

export const about = {
  intro:
    "I'm a developer who believes software should feel as good as it functions. With 6+ years building products for startups and enterprises, I specialize in turning complex ideas into elegant, high-performance interfaces.",
  story:
    "My journey began with curiosity about how things work — from dismantling gadgets as a kid to architecting scalable web applications today. I obsess over details: typography, motion, latency, and the subtle moments that make interfaces memorable.",
  highlights: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Code Commits", value: "3k+" },
  ],
  strengths: [
    "Performance-first architecture",
    "Design systems & component libraries",
    "Accessible, inclusive interfaces",
    "End-to-end product development",
  ],
};

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vue.js",
  ],
  backend: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis", "AWS"],
  tools: ["Git", "Docker", "Figma", "Vercel", "CI/CD", "Jest"],
};

export const projects = [
  {
    id: "lumina",
    title: "Lumina Analytics",
    description:
      "Real-time analytics dashboard with sub-100ms query performance and cinematic data visualizations for enterprise teams.",
    image: null,
    gradient: "from-violet-600/40 via-indigo-500/20 to-purple-900/30",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    size: "large",
  },
  {
    id: "nexus",
    title: "Nexus Commerce",
    description:
      "Headless e-commerce platform processing $2M+ monthly with seamless checkout and inventory sync.",
    image: null,
    gradient: "from-emerald-600/30 via-teal-500/15 to-cyan-900/25",
    tags: ["Next.js", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    size: "medium",
  },
  {
    id: "pulse",
    title: "Pulse Health",
    description:
      "HIPAA-compliant patient portal with telehealth integration and intuitive care workflows.",
    image: null,
    gradient: "from-rose-500/25 via-pink-500/15 to-red-900/20",
    tags: ["React Native", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "medium",
  },
  {
    id: "orbit",
    title: "Orbit Design System",
    description:
      "Open-source component library adopted by 500+ developers with full accessibility compliance.",
    image: null,
    gradient: "from-amber-500/25 via-orange-500/15 to-yellow-900/20",
    tags: ["Storybook", "TypeScript", "Radix"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "small",
  },
  {
    id: "flux",
    title: "Flux AI Studio",
    description:
      "Generative AI workspace for creative teams with real-time collaboration and model fine-tuning.",
    image: null,
    gradient: "from-blue-600/30 via-sky-500/15 to-indigo-900/25",
    tags: ["Python", "OpenAI", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "small",
  },
];

export const experience = [
  {
    year: "2024 — Present",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    description:
      "Leading performance initiatives and design system evolution for developer-facing products used by millions.",
    achievements: [
      "Reduced LCP by 42% across flagship properties",
      "Shipped component library v3 with 60+ primitives",
    ],
  },
  {
    year: "2022 — 2024",
    role: "Full-Stack Developer",
    company: "Stripe",
    description:
      "Built payment experiences and internal tools with focus on reliability, accessibility, and developer ergonomics.",
    achievements: [
      "Architected checkout flow used by 10k+ merchants",
      "Mentored 4 engineers on React best practices",
    ],
  },
  {
    year: "2020 — 2022",
    role: "Software Engineer",
    company: "Linear",
    description:
      "Contributed to core product features, real-time sync infrastructure, and keyboard-first interaction patterns.",
    achievements: [
      "Implemented collaborative issue editing",
      "Optimized bundle size by 28%",
    ],
  },
  {
    year: "2018 — 2020",
    role: "Junior Developer",
    company: "Freelance & Startups",
    description:
      "Delivered MVPs and production apps for early-stage founders across fintech, health, and SaaS verticals.",
    achievements: [
      "Launched 8 products from concept to production",
      "Established recurring client relationships",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Alex brings a rare combination of engineering rigor and design sensibility. Every interface feels intentional, polished, and fast.",
    author: "Sarah Chen",
    role: "VP of Product",
    company: "TechFlow",
  },
  {
    quote:
      "Working with Alex elevated our entire product. The attention to micro-interactions and performance was exceptional.",
    author: "Marcus Rivera",
    role: "Founder & CEO",
    company: "Nexus Labs",
  },
  {
    quote:
      "One of the most talented frontend engineers I've collaborated with. Delivers on time, communicates clearly, exceeds expectations.",
    author: "Emily Watson",
    role: "Engineering Director",
    company: "CloudScale",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
