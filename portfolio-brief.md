# Personal Portfolio Website — Project Brief for Agentic AI

## Overview

Build a personal portfolio website for a software developer specializing in AI engineering and full-stack development. The site serves two audiences equally: **tech employers** looking to hire an AI engineer, and **freelance clients** looking for someone to build AI-powered tools and web applications for their business.

The site must feel premium, intentional, and memorable — not a generic developer template.

---

## Owner Details (Fill These In Before Building)

```
Name: Bilal
Role: Full-Stack Developer & AI Engineer
Tagline: I build AI-powered web applications.
Sub-tagline: Specializing in RAG pipelines, AI integrations, and full-stack web development.
Email: your@email.com
LinkedIn: https://linkedin.com/in/your-handle
GitHub: https://github.com/your-username
Resume PDF: /resume.pdf  (place in /public folder)
```

---

## Design Direction

### Aesthetic
**Dark, minimal, and techy — but with soul.** Not a cold hacker aesthetic, not a generic dark template. Think: precision engineering meets quiet confidence.

- **Background**: Deep near-black (`#080810`) — not pure black, gives depth
- **Primary text**: Off-white (`#f0f0f5`) — softer than pure white
- **Accent color**: Electric cyan (`#00d4ff`) — used sparingly for highlights, glows, and hover states
- **Secondary accent**: Muted slate (`#334155`) — for borders, dividers, and subtle backgrounds
- **Font pairing**:
  - Display / headings: `Syne` (Google Fonts) — geometric, distinctive, modern
  - Body: `DM Sans` (Google Fonts) — clean, readable, friendly
- **Texture**: A very subtle noise grain overlay on the background (`opacity: 0.03`) — adds depth without distraction

### Key Design Principles
- Generous whitespace — let elements breathe
- One accent color only — cyan is used for highlights, nothing else
- Cards have a `1px` border of `rgba(255,255,255,0.08)` with a very subtle inner glow on hover
- No stock illustrations, no emoji decoration, no gradients except the hero
- Every section has a consistent left-aligned layout — no centered walls of text
- Smooth scroll behavior across the entire page

### Animations (Framer Motion)
- On page load: hero text staggers in with a fade + slight upward translate (50ms delay between lines)
- On scroll: each section fades in with a subtle upward translate as it enters the viewport (`whileInView`)
- Hover on project cards: border glows cyan, card lifts `translateY(-4px)`
- Hover on nav links: cyan underline slides in from left
- Navbar: blurs background with `backdrop-filter: blur(12px)` on scroll
- CTA buttons: subtle shimmer/shine animation on hover

---

## Tech Stack

- **Next.js 14** (App Router) with **TypeScript**
- **Tailwind CSS** — for all styling
- **Framer Motion** — for all animations
- **EmailJS** — for contact form (free tier, no backend needed)
- **Google Fonts** — Syne + DM Sans
- **Vercel** — deployment (mention in README)
- **next/font** — for optimized font loading

---

## Project Structure

```
portfolio/
│
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Single page — renders all sections
│   └── globals.css             # Global styles, CSS variables, scrollbar styling
│
├── components/
│   ├── Navbar.tsx              # Sticky navbar with blur on scroll
│   ├── Hero.tsx                # Hero section
│   ├── Projects.tsx            # Projects grid
│   ├── Skills.tsx              # Skills by category
│   ├── Experience.tsx          # Vertical timeline
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
│
├── lib/
│   └── data.ts                 # All content (projects, skills, experience) as typed constants
│
├── public/
│   └── resume.pdf              # Resume file for download
│
├── .env.local                  # EmailJS keys
└── tailwind.config.ts
```

---

## Section Specifications

---

### Navbar

**Behavior:**
- Fixed to top, full width
- On scroll: background becomes `rgba(8, 8, 16, 0.85)` with `backdrop-filter: blur(12px)` and a `1px` bottom border
- Smooth transition between transparent and blurred state

**Left side:**
- Name: `Bilal` in Syne font, slightly bold
- On hover: accent color

**Right side (desktop):**
- Nav links: About, Projects, Skills, Experience, Contact
- Each link scrolls smoothly to its section
- Active section link highlighted in cyan (use IntersectionObserver)
- **Resume button**: bordered pill button — `border: 1px solid #00d4ff`, cyan text, transparent background. On hover: fills with cyan, text goes dark. Downloads `/resume.pdf` on click.

**Mobile:**
- Hamburger icon, full-screen slide-down menu with the same links

---

### Hero

**Layout:** Vertically centered, left-aligned, takes up 100vh

**Content (top to bottom):**
1. Small eyebrow label: `"Full-Stack Developer & AI Engineer"` — all caps, letter-spaced, cyan color, small font
2. Main headline (2 lines): `"I build AI-powered"` / `"web applications."` — very large (clamp between 48px and 80px), Syne font, off-white
3. Sub-headline: `"Specializing in RAG pipelines, AI integrations, and full-stack web development."` — DM Sans, muted slate color, max-width 520px
4. Two CTA buttons side by side:
   - **View Projects** — filled cyan background, dark text, rounded-full, padding generous
   - **Download Resume** — bordered, cyan text, transparent background
5. Scroll indicator at the bottom center — a small animated downward chevron or dot

**Background:**
- A subtle radial gradient glow behind the headline — cyan at very low opacity (`rgba(0, 212, 255, 0.06)`) centered slightly top-left
- The noise grain overlay sits on top

**Animation:**
- Eyebrow label fades in first
- Headline lines stagger in (line 1, then line 2, 80ms apart)
- Sub-headline fades in after
- Buttons fade in last
- Total animation time: under 1 second

---

### Projects

**Section header:**
- Small label above: `"WORK"` — caps, cyan, letter-spaced
- Section title: `"Projects"` — Syne, large

**Layout:** 2-column grid on desktop, 1 column on mobile

**Each project card:**
- Dark card background (`#0f0f1a`)
- `1px` border `rgba(255,255,255,0.07)`
- Top: a colored accent line or small tag showing the category (e.g. `"AI / RAG"`, `"Agentic AI"`)
- Project name — Syne, large, off-white
- One-line description — DM Sans, muted
- 2-3 line "what it does" paragraph
- Tech stack pills — small rounded badges, dark background, cyan border, cyan text
- Bottom: two icon links — GitHub (opens repo) and Demo (opens video/live link)
- On hover: border transitions to `rgba(0, 212, 255, 0.4)`, card lifts `translateY(-4px)`, subtle cyan glow on the border

**Projects data (in `lib/data.ts`):**

```typescript
export const projects = [
  {
    id: 1,
    category: "AI / RAG",
    name: "Context-PDF",
    tagline: "Chat with any PDF using a RAG pipeline.",
    description: "Upload a PDF and ask questions grounded in its content. Text is extracted, chunked, embedded with OpenAI, stored in ChromaDB, and retrieved at question time to keep answers aligned with the document.",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Next.js", "OpenAI"],
    github: "https://github.com/your-username/context-pdf",
    demo: "https://your-demo-link.com",
  },
  {
    id: 2,
    category: "Agentic AI",
    name: "AskMyData",
    tagline: "Talk to your data, not about it.",
    description: "Upload any CSV and ask questions in plain English. AskMyData generates and executes Python code behind the scenes to analyze your data and return answers as text or charts — no SQL, no formulas required.",
    tech: ["FastAPI", "pandas", "OpenAI", "Next.js", "Tailwind CSS"],
    github: "https://github.com/your-username/askmydata",
    demo: "https://your-demo-link.com",
  },
]
```

---

### Skills

**Section header:** Same pattern — `"SKILLS"` eyebrow, `"What I work with"` title

**Layout:** Grouped by category in a clean grid

**Categories and skills:**

```typescript
export const skills = [
  {
    category: "AI & Machine Learning",
    icon: "🤖",  // replace with a lucide-react icon
    items: ["LangChain", "LlamaIndex", "OpenAI API", "RAG Pipelines", "ChromaDB", "Whisper", "Agentic AI"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["FastAPI", "Django", "Python", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
]
```

**Each skill group:**
- Card with dark background, subtle border
- Category name with icon at top
- Skills as small pill badges below
- Hover on pill: background shifts slightly, text brightens

---

### Experience

**Section header:** `"EXPERIENCE"` eyebrow, `"Background"` title

**Layout:** Vertical timeline — left side has the line and dot, right side has the content

**Timeline line:** A `2px` vertical line in `rgba(255,255,255,0.1)`, with a filled cyan dot at each entry point

**Each entry:**
- Role / degree name — Syne, medium, off-white
- Company / institution — DM Sans, cyan
- Date range — small, muted
- 1-2 line description — DM Sans, muted

**Experience data:**

```typescript
export const experience = [
  {
    role: "Software Developer",
    company: "Current Company Name",
    period: "2024 — Present",
    description: "Full-stack development in a professional environment. Working with Django, Next.js, and backend systems.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2024 — Present",
    description: "Building AI-powered tools and web applications for clients. Projects include RAG chatbots and autonomous data analysis tools.",
  },
  {
    role: "Bachelor's in Software Engineering",
    company: "Your University",
    period: "2022 — Present",
    description: "Studying software engineering with a focus on AI and full-stack development.",
  },
]
```

---

### Contact

**Section header:** `"CONTACT"` eyebrow, `"Let's work together"` title

**Layout:** Two columns on desktop
- Left: a short paragraph — *"Whether you're looking to hire, collaborate, or build something together — I'd love to hear from you."* + email and LinkedIn as clickable links with icons
- Right: the contact form

**Form fields:**
- Name
- Email
- Message (textarea, 4 rows)
- Send button — full width, filled cyan, dark text

**Behavior:**
- On submit: show a loading state on the button
- On success: replace form with a clean success message
- On failure: show an inline error message
- Use **EmailJS** to send the form — no backend needed

**Environment variables:**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

---

### Footer

- Minimal — one line
- Left: `© 2025 Bilal. All rights reserved.`
- Right: GitHub and LinkedIn icon links
- A very subtle `1px` top border

---

## CSS Variables (globals.css)

```css
:root {
  --background: #080810;
  --foreground: #f0f0f5;
  --accent: #00d4ff;
  --muted: #64748b;
  --border: rgba(255, 255, 255, 0.07);
  --card-bg: #0f0f1a;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

---

## Responsive Behavior

- **Desktop (1280px+)**: Full layout as described
- **Tablet (768px–1279px)**: Projects grid goes to 1 column, timeline stays, nav stays
- **Mobile (<768px)**: Hamburger nav, single column everything, hero font size scales down, buttons stack vertically

---

## Performance & SEO

- Add proper `<title>` and `<meta description>` in `layout.tsx`
- Use `next/image` for any images
- Use `next/font` for Syne and DM Sans
- Lazy load sections below the fold
- Resume PDF served from `/public/resume.pdf` using a plain anchor tag with `download` attribute

---

## Environment Variables

```
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Definition of Done

- [ ] All 6 sections render correctly on desktop and mobile
- [ ] Navbar scroll behavior works (blur, active link highlight)
- [ ] Hero animations play on page load
- [ ] Section scroll animations trigger on viewport entry
- [ ] Project cards have hover effects
- [ ] Resume downloads on button click
- [ ] Contact form sends an email via EmailJS
- [ ] No layout breaks on mobile
- [ ] Fonts load correctly (Syne + DM Sans)
- [ ] Site deploys successfully on Vercel

---

## Out of Scope

- No blog section for now
- No dark/light mode toggle
- No CMS — all content lives in `lib/data.ts`
- No backend — EmailJS handles the contact form
