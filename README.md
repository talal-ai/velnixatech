# Velnixatech — Autonomous AI Systems & High-Velocity Web Platforms

> Ultra-premium, human-crafted corporate and client-facing web application for **Velnixatech**, an AI agency specializing in autonomous workflow automations, multi-agent reasoning swarms, private enterprise RAG, and sub-50ms web engineering.

---

## 🌟 Key Highlights & Design Standards

- **White / Light Aesthetic**: Crisp `#FFFFFF` and `#FAFAFC` surfaces, subtle micro-borders (`border-slate-200/90`), and refined drop shadows (`shadow-soft-md`, `shadow-soft-xl`).
- **Universal Poppins Typography**: The **Poppins** font family (Google Fonts 300, 400, 500, 600, 700, 800) is enforced across every single heading, subheader, body paragraph, button, label, and code annotation.
- **Enhanced Hero Section**:
  - Live animated telemetry status pill (`Velnix Neural Core v3.4 Active`).
  - High-impact dual CTAs ("Book Architecture Call" & "Watch 2-Min System Demo").
  - **Live Automation Pipeline Canvas**: Interactive node-based visualizer with 4 real-world operational scenarios (*Inbound Revenue Engine*, *Autonomous Support Swarm*, *Financial Document Reconciler*, *High-Velocity Web Platform*), active step pulses, latency counters, and live JSON payload streaming.
- **Interactive ROI & Savings Calculator**:
  - Dynamic sliders for Team Size, Manual Repetitive Hours, and Labor Cost.
  - Real-time reactivity computing annual dollar savings, recovered hours, velocity multiplier, and estimated payback days.
- **Side-by-Side Paradigm Comparison**:
  - Interactive matrix contrasting traditional slow agency retainers vs. Velnixatech autonomous software architecture.
- **Multi-Step Project Inquiry & Booking Modal**:
  - Step 1: System Focus Selection
  - Step 2: Project Scope, Investment Tier & Target Timeline
  - Step 3: Contact Information & Instant Confirmation Protocol
- **Interactive Production Terminal Modal**:
  - Live animated telemetry feed demonstrating real-time agent triage, LLM reasoning, vector lookup, and webhook dispatch.
- **Strict UI/UX Pro Max Compliance**:
  - **No emojis as icons** — 100% SVG icons from Lucide React.
  - Strict WCAG 2.1 AA color contrast (`#0F172A` text on light backgrounds).
  - Stable transitions without layout shifts (`cursor-pointer` on all interactive targets).
  - Responsive across mobile (375px), tablet (768px), desktop (1024px), and ultra-wide (1440px+).

---

## 🏗️ Architecture & File Structure

```
d:\startups\velnixatech\
├── index.html                   # HTML entry point with Poppins font preconnect
├── package.json                 # Dependencies (React 18, Vite, Tailwind CSS, Lucide)
├── tailwind.config.js           # Theme configuration with Poppins font & design tokens
├── postcss.config.js            # PostCSS pipeline
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Master orchestrator & modal state manager
│   ├── index.css                # Base CSS, Poppins import, custom scrollbar & utility classes
│   ├── data/
│   │   ├── navigation.js        # Nav links, hero stats, and trust markers
│   │   ├── workflowScenarios.js # 4 interactive automation scenarios for Hero Canvas
│   │   ├── services.js          # Detailed AI Automations & Web Services data
│   │   ├── techStack.js         # Partner models and cloud platforms for marquee
│   │   ├── caseStudies.js       # Real-world quantifiable client outcomes
│   │   ├── pricing.js           # Sprint & Retainer tiers with monthly/annual pricing
│   │   ├── testimonials.js      # Executive client reviews & industry logos
│   │   └── faq.js               # Categorized & searchable FAQ items
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Floating frosted glass header with mobile drawer
│   │   │   └── Footer.jsx       # Multi-column footer with live status & newsletter
│   │   ├── ui/
│   │   │   ├── Button.jsx       # Accessible buttons with glowing hover states
│   │   │   ├── Badge.jsx        # Pill badges with live radar pulses
│   │   │   ├── Card.jsx         # Clean white cards with subtle borders
│   │   │   └── Modal.jsx        # Accessible dialog with blur backdrop & escape key
│   │   └── interactive/
│   │       ├── LiveAutomationCanvas.jsx  # Hero interactive node visualizer
│   │       ├── RoiCalculator.jsx         # Real-time savings and ROI modeler
│   │       ├── BeforeAfterComparison.jsx # Traditional vs Velnix comparison
│   │       ├── ProjectInquiryModal.jsx   # 3-step interactive booking flow
│   │       └── VideoDemoModal.jsx        # Live simulated telemetry console
│   └── sections/
│       ├── HeroSection.jsx               # Hero with headline, badges, and canvas
│       ├── TechMarqueeSection.jsx        # Infinite tech integration marquee
│       ├── ServicesBentoSection.jsx      # Bento grid for AI & Web services
│       ├── WorkflowEngineSection.jsx     # Autonomous runtime architecture breakdown
│       ├── RoiSection.jsx                # ROI section container
│       ├── BeforeAfterSection.jsx        # Benchmark comparison container
│       ├── CaseStudiesSection.jsx        # Quantifiable client case studies
│       ├── ProcessSection.jsx            # 4-stage engineering protocol
│       ├── PricingSection.jsx            # Transparent engagement tiers
│       ├── TestimonialsSection.jsx       # Client social proof & industry cloud
│       ├── FaqSection.jsx                # Searchable accordion FAQ
│       └── CtaBannerSection.jsx          # Final conversion banner
└── dist/                                 # Production-ready static build output
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
The preview server will be accessible at `http://localhost:4173/`.

---

## 🚢 1-Click Deployment Options

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### GitHub Pages
Simply push the repository to GitHub and enable GitHub Pages on the `dist` directory or via the official Vite GitHub Actions workflow.

---

© 2026 Velnixatech Technologies Inc. All rights reserved.
