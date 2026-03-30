export type Project = {
  id: number;
  slug: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
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
  description?: string;
  bullets?: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl: string;
  learnings: string[];
};

export const owner = {
  name: "Bilal Irfan",
  role: "Full-Stack Developer & AI Engineer",
  tagline: "I build AI-powered web applications.",
  subTagline:
    "Full-stack developer with a focus on AI engineering, building end-to-end applications that integrate LLMs, RAG pipelines, and agentic AI into real workflows.",
  email: "bilalirfancontact@gmail.com",
  linkedIn: "https://www.linkedin.com/in/bilalirfancontact/",
  github: "https://github.com/BilalIrfanContact",
  reddit: "https://www.reddit.com/user/biloo0asks/",
  x: "https://x.com/biloo0_2",
  resumePath: "/BilalIrfan_Resume.pdf",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const projects: Project[] = [
  {
    id: 1,
    slug: "askmydoc",
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
    slug: "askmydata",
    category: "Agentic AI",
    name: "AskMyData",
    tagline: "Talk to your data, not about it.",
    description:
      "Upload any CSV and ask questions in plain English. AskMyData generates and executes Python code behind the scenes to analyze data and return answers as text or charts.",
    tech: ["FastAPI", "pandas", "OpenAI", "Next.js", "Tailwind CSS"],
    github: "https://github.com/BilalIrfanContact/AskMyData",
    demo: "https://github.com/BilalIrfanContact/AskMyData",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    icon: "bot",
    items: [
      "OpenAI API",
      "Large Language Models (LLMs)",
      "LangChain",
      "RAG Pipelines",
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB",
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
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Jinja2"],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    items: ["Git", "GitHub", "Vercel", "Postman", "Linux"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "KNYSYS",
    period: "February 2025 - Present",
    bullets: [
      "Designed and maintained RESTful APIs supporting secure authentication and reliable data exchange between backend services and frontend interfaces.",
      "Built full-stack web applications using Python (Quart) for backend services and Jinja2 for dynamic frontend rendering, integrating data from MongoDB.",
      "Managed PostgreSQL and MongoDB databases, handling CRUD operations and maintaining data consistency.",
      "Engaged directly with clients across logistics, waste management, finance, and customs industries gathering requirements, understanding pain points, and proposing technical solutions.",
      "Demonstrated developed features to clients, translating technical implementation into clear non-technical walkthroughs.",
      "Coordinated with and occasionally led small team sub-groups during development phases, managing task distribution and delivery.",
    ],
  },
  {
    role: "Intern Software Developer",
    company: "KNYSYS",
    period: "November 2024 - January 2025",
    bullets: [
      "Assisted in team-based development using Git, gaining exposure to branching strategies and version control workflows used in collaborative projects.",
      "Learned to work in a Linux-based development environment, familiarizing myself with common shell commands, file system navigation, and basic terminal tools.",
      "Gained hands-on understanding of MVC architecture by working on backend logic, database interactions, and frontend templates under guidance.",
    ],
  },
  {
    role: "Bachelor of Science in Software Engineering",
    company: "Mohammad Ali Jinnah University (MAJU)",
    period: "March 2021 - February 2025",
    description:
      "Completed undergraduate studies focused on software engineering fundamentals, full-stack development, and AI-oriented problem solving.",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Issued March 2026",
    credentialId: "ccqmbxa5poy8",
    credentialUrl: "https://verify.skilljar.com/c/ccqmbxa5poy8",
    learnings: [
      "Gained hands-on experience using AI coding agents in real development workflows.",
      "Learned how to smartly manage context, memory, and token limits to keep the agent focused and effective.",
      "Explored MCP (Model Context Protocol) integrations to connect Claude Code with external tools like Figma and Playwright.",
      "Understood the tool system Claude Code uses to read files, run commands, and navigate codebases autonomously.",
      "Learned to use CLAUDE.md for persistent project memory storing conventions, import paths, and coding rules across sessions.",
      "Orchestrated multiple subagents to work on different parts of a codebase simultaneously for parallel development.",
      "Set up hooks to automate workflows and add security controls around tool usage.",
    ],
  },
  {
    title: "Machine Learning A-Z: AI, Python & R",
    issuer: "Udemy",
    issued: "Issued March 2026",
    credentialUrl: "https://www.udemy.com/certificate/UC-8f80493e-e90c-4146-993c-0a3b51cee06f/",
    learnings: [
      "Gained skills in data preprocessing.",
      "Applied regression techniques.",
      "Applied classification methods.",
      "Explored clustering approaches.",
      "Studied reinforcement learning.",
      "Worked with natural language processing (NLP).",
      "Practiced model selection and boosting.",
    ],
  },
  {
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    issued: "Issued July 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/6206c4e1faf9280e9e377c11fdcff60c4c82cfd29b7c21df08b5280551d23ea8",
    learnings: [
      "Understand the role and responsibilities of a data analyst.",
      "Learn how data supports business decisions.",
      "Prepare and transform data using Excel, SQL, and Power BI.",
      "Basics of data modeling and relational databases.",
      "Create visualizations, dashboards, and reports.",
    ],
  },
];
