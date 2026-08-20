# Haresh -- Doctoral Application Portfolio

A research-focused academic portfolio built with React (Vite) + Tailwind CSS,
designed for PhD applications in the US. Sidebar navigation across six sections:
Achievements, Education, Experience, Research & Projects, Teaching & Leadership, Skills.

## Run locally

npm install
npm run dev

Open the printed local URL (typically http://localhost:5173).

## Build for deployment

npm run build

This outputs a static site to dist/ -- deploy it to Vercel, Netlify, GitHub Pages,
or any static host.

## Editing content

All copy lives in one place: src/data/cv.js. Update achievements, education,
experience, projects, teaching roles, and skills there -- the UI updates automatically.

To add a real photo, replace the initials avatar in src/components/Sidebar.jsx
(the Initials component) with an <img> tag.

## Customizing colors

Palette is defined in tailwind.config.js under theme.extend.colors
(navy / oxblood / brass / paper / slate). Change hex values there to retheme
the entire site.
