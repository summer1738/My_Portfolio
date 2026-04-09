export const profile = {
  name: "Lester Leeroy Kandekande",
  tagline:
    "Computer Science Engineer | Full-Stack Developer | IoT Engineer | Graphics Programmer",
  headline:
    "I build intelligent systems combining web, IoT, and real-time data.",
  subheadline:
    "From intuitive interfaces to backend analytics and embedded devices — scalable digital solutions across web, mobile, and embedded systems.",
  email: "leeroykkandee@gmail.com",
  /** E.164 — used for tel: links */
  phone: "+263781296767",
  phoneLabel: "+263 78 129 6767",
  github: "https://github.com/summer1738",
  githubUser: "summer1738",
  location: "Harare, Zimbabwe",
  linkedin: "https://www.linkedin.com/in/lester-l-kandekande-b981bb317/",
  resumeUrl: "/lester-cosultant-cv.pdf",
};

export const skillGroups = [
  {
    title: "Web Development",
    icon: "web",
    items: ["HTML, CSS, JavaScript", "React.js", "Angular", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: "backend",
    items: [
      "Python (Flask, FastAPI)",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Database Design (MySQL, PostgreSQL)",
    ],
  },
  {
    title: "UI / UX Design",
    icon: "ui",
    items: ["Figma", "User-centered design", "Wireframing & prototyping"],
  },
  {
    title: "Graphics Programming",
    icon: "gfx",
    items: ["OpenGL (basic/intermediate)", "Computer graphics concepts"],
  },
  {
    title: "Mobile Development",
    icon: "mobile",
    items: ["Flutter", "React Native", "Kotlin"],
  },
  {
    title: "IoT Engineering",
    icon: "iot",
    items: ["ESP32 / Arduino", "MQTT Protocol", "Sensor integration"],
  },
] as const;

export const projects = [
  {
    featured: true,
    title: "NBSZ Blood Collection Mobile System",
    description:
      "A mobile solution for the National Blood Service Zimbabwe (NBSZ) supporting blood collection workflows, field data capture, and coordination with collection teams.",
    highlights: [
      "Mobile-first collection workflows",
      "Field data capture & sync",
      "NBSZ-aligned processes",
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    featured: true,
    title: "Vimbika POS & Fiscalisation System",
    description:
      "Point-of-sale and fiscalisation software for compliant retail operations: sales, receipts, inventory, and integration with fiscal device requirements.",
    highlights: [
      "POS & checkout flows",
      "Fiscal compliance & reporting",
      "Retail operations",
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    featured: false,
    title: "Microgrid Energy Management System",
    description:
      "An intelligent system for monitoring and predicting solar PV output. IoT sensors feed backend analytics with dashboards for real-time monitoring.",
    highlights: [
      "Solar PV monitoring & prediction",
      "IoT sensors + backend analytics",
      "Real-time monitoring dashboards",
    ],
    links: [] as { label: string; href: string }[],
  },
  {
    featured: false,
    title: "Truchats Landing Page",
    description:
      "A modern responsive landing page focused on UI/UX and performance optimization.",
    highlights: ["Responsive layout", "Performance-focused delivery"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/summer1738/Truchats-Landing-Page",
      },
    ],
  },
  {
    featured: false,
    title: "IoT Sensor Monitoring System",
    description:
      "Real-time sensor data over ESP32 and MQTT, visualized through a web dashboard.",
    highlights: ["ESP32 + MQTT pipeline", "Live web visualization"],
    links: [] as { label: string; href: string }[],
  },
  {
    featured: false,
    title: "ZimInsure",
    description:
      "An online insurance platform for quoting, policy management, and customer-facing insurance services in a digital-first workflow.",
    highlights: [
      "Online quotes & policies",
      "Customer self-service",
      "Digital insurance workflow",
    ],
    links: [] as { label: string; href: string }[],
  },
] as const;

export const interests = [
  "Full-stack application development",
  "Smart systems and automation",
  "Startup and product development",
  "Artificial Intelligence (beginner level)",
];

export const goals =
  "I aim to build impactful tech solutions, contribute to open-source projects, and grow into a leading software engineer specializing in intelligent systems and scalable applications.";
