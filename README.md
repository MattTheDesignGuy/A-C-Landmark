# A-C-Landmark
Website for A&amp;C Landmark, a Melbourne-based boutique law firm specialising in banking &amp; finance, commercial law, civil litigation, and conveyancing. Built with Figma Make and developed locally using Vite + React + TypeScript.

Pages
RoutePage/Home — hero, about, team, why choose us, practice areas preview, CTA/servicesPractice Areas — detailed alternating-layout service sections/contactContact — enquiry form with practice area dropdown, office details
Tech Stack

Framework: React 18 + TypeScript
Build Tool: Vite
Styling: Tailwind CSS
Component Library: shadcn/ui
Routing: React Router
Icons: Lucide React
Typography: Playfair Display (headings), DM Sans (body)
Origin: Figma Make (design-to-code)

Design
The site uses a navy/gold/warm-white palette with a scroll-aware navigation bar that transitions from transparent (over hero imagery) to a frosted white on scroll. All pages are fully responsive with a mobile hamburger menu.
Getting Started
bashnpm install
npm run dev
Build & Deploy
bashnpm run build
The dist/ folder is ready to deploy to Netlify or GitHub Pages. In Netlify, connect the GitHub repo and set:

Build command: npm run build
Publish directory: dist

Notes

Images are sourced via figma:asset/ references from the Figma Make export. Ensure assets are resolved correctly in the local environment or replace with standard image imports for production.
The contact form currently uses a mock submission handler — wire up to a form service (e.g. Netlify Forms, Formspree) before going live.
Page <title> in index.html should be updated from the default Figma Make placeholder to A&C Landmark | Boutique Law Firm Melbourne.
