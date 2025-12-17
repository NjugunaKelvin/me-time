# System Architecture

## Overview
This application serves as a high-performance, minimalist personal portfolio for a Senior Backend & AI Engineer. The core design philosophy focuses on speed, simplicity, and maintainability, mirroring the distributed systems principles advocated by the author.

## Tech Stack
- **Framework:** Next.js (React)
    - Chosen for its server-side rendering (SSR) capabilities and static site generation (SSG), ensuring optimal SEO and initial load performance.
    - Uses the App Router for modern layout nesting and component sever/client splitting.
- **Styling:** Tailwind CSS
    - Utility-first CSS allows for rapid UI composition without context-switching between CSS and JS files.
    - Enables easy implementation of the dark-mode-first aesthetic.
- **Animation:** Framer Motion
    - Used sparingly for micro-interactions (e.g., page transitions, hover states) to enhance "feel" without blocking the main thread.
- **Data:** Local JSON (`src/data/content.js`)
    - **Decision:** No External CMS.
    - **Reasoning:** 
        1. **Zero Latency:** Data is available at build time. No API calls to contentful/sanity.
        2. **GitOps:** Content updates are PRs. This aligns content versioning with code versioning.

## Directory Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── code/           # Code Evidence page (Client Component for syntax highlighting)
│   ├── projects/       # Projects listing (Server Component)
│   ├── contact/        # Contact page (Hybrid)
│   └── page.js         # Landing page
├── components/         # Reusable UI components
│   ├── Navbar.jsx      # Sticky navigation
│   ├── Footer.jsx      # Responsive footer
│   └── ...
├── data/               # Static content
└── docs/               # Architecture & Documentation
```

## Performance Considerations
- **Font Optimization:** using `next/font` to self-host and preload Google Fonts (Inter/Roboto), preventing layout shifts (CLS).
- **Bundle Splitting:** Large libraries like `react-syntax-highlighter` are only loaded in the `/code` route via Next.js automatic code splitting.
- **Static Assets:** All images and icons are optimized SVGs to keep the total bundle size minimal.

## Future Roadmap
- [ ] **Blog Integration:** Move from static `articles` array to MDX based rendering for richer content authoring.
- [ ] **E2E Testing:** Implement Playwright to verify critical user journeys (Contact form, Project navigation).
- [ ] **CI/CD:** Automate deployment to Vercel on git push.
