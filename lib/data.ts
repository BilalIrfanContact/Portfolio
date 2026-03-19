export type Project = {
  id: number;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export type SkillGroup = {
  category: string;
  icon: "bot" | "settings" | "monitor" | "wrench";
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const owner = {
  name: "Bilal Irfan",
  role: "Full-Stack Developer & AI Engineer",
  tagline: "I build AI-powered web applications.",
  subTagline:
    "Specializing in RAG pipelines, AI integrations, and full-stack web development.",
  email: "bilalirfancontact@gmail.com",
  linkedIn: "https://www.linkedin.com/in/bilalirfancontact/",
  github: "https://github.com/BilalIrfanContact",
  reddit: "https://www.reddit.com/user/biloo0asks/",
  x: "https://x.com/biloo0_2",
  resumePath: "/resume.pdf",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const projects: Project[] = [
  {
    id: 1,
    category: "AI / RAG",
    name: "AskMyDoc",
    tagline: "Chat with documents using a RAG pipeline.",
    description:
      "Upload a document and ask questions grounded in its content. Text is extracted, chunked, embedded, and retrieved at question time to keep answers aligned with source context.",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Next.js", "OpenAI"],
    github: "https://github.com/BilalIrfanContact/AskMyDoc",
    demo: "https://github.com/BilalIrfanContact/AskMyDoc",
  },
  {
    id: 2,
    category: "Agentic AI",
    name: "AskMyData",
    tagline: "Talk to your data, not about it.",
    description:
      "Upload any CSV and ask questions in plain English. AskMyData generates and executes Python code behind the scenes to analyze data and return answers as text or charts.",
    tech: ["FastAPI", "pandas", "OpenAI", "Next.js", "Tailwind CSS"],
    github: "https://github.com/BilalIrfanContact/AskMyData",
    demo: "https://github.com/BilalIrfanContact/AskMyData",
  },
  {
    id: 3,
    category: "Machine Learning",
    name: "Podcast Listening Time Prediction",
    tagline: "Predicting podcast listening time with ML.",
    description:
      "A machine learning project focused on estimating listener watch or listening duration for podcast content using structured input features.",
    tech: ["Python", "Machine Learning", "Pandas", "scikit-learn"],
    github: "https://github.com/BilalIrfanContact/Podcast-Listening-Time-Prediction",
    demo: "https://github.com/BilalIrfanContact/Podcast-Listening-Time-Prediction",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    icon: "bot",
    items: [
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "RAG Pipelines",
      "ChromaDB",
      "Whisper",
      "Agentic AI",
    ],
  },
  {
    category: "Backend",
    icon: "settings",
    items: ["FastAPI", "Django", "Python", "REST APIs", "PostgreSQL", "MongoDB", "Quart", "Odoo"],
  },
  {
    category: "Frontend",
    icon: "monitor",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Jinja2"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Linux"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Junior Software Developer",
    company: "KNYSYS",
    period: "February 2025 - Present",
    description:
      "Designing REST APIs, working with PostgreSQL and MongoDB, and building full-stack applications with Quart, Jinja2, and Odoo in a production environment.",
  },
  {
    role: "Intern Software Developer",
    company: "KNYSYS",
    period: "November 2024 - January 2025",
    description:
      "Contributed to team workflows with Git, worked in Linux-based development environments, and learned MVC architecture through guided backend, database, and frontend tasks.",
  },
  {
    role: "Bachelor of Science in Software Engineering",
    company: "Mohammad Ali Jinnah University (MAJU)",
    period: "March 2021 - February 2025",
    description:
      "Completed undergraduate studies focused on software engineering fundamentals, full-stack development, and AI-oriented problem solving.",
  },
];
