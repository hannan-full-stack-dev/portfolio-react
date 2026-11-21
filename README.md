# 🏛️ Md. Moklasur Rahman Golap — Portfolio

A modern, responsive portfolio website for an **Architectural Engineer & 3D Visualizer**, showcasing architectural designs, 3D visualizations and field-supervised civic projects. Built as a fast single-page app with **React + Vite**.

🔗 **Live Demo:** [portfolio-react-pi-sable.vercel.app](https://mdmoklasurrahmangolap.vercel.app/)

![preview](https://github.com/user-attachments/assets/e13f68eb-bbda-456e-b0cc-e611757882d2)

## ✨ Features

- **Multi-page SPA** — Home, About, Projects and Gallery with React Router
- **Project showcase** — cards with a detailed popup (overview, location, year, role, materials, tools) and Prev/Next navigation
- **Photo gallery** — categorized gallery with a full-screen lightbox
- **Custom smooth scrolling** — buttery wheel scrolling with no extra library (respects reduced-motion & touch devices)
- **Scroll-reveal animations** and an elegant dark/gold design
- **Accessible modals** — focus management, scroll lock, keyboard-friendly
- **Downloadable CV** from the About page
- **Easy content editing** — all text, projects and gallery items live in simple data files (no code changes needed)
- **Vercel-ready** — SPA rewrites and legacy `.html` URL redirects included

## 🛠️ Tech Stack

| Area       | Tools           |
| ---------- | --------------- |
| Framework  | React 18        |
| Build tool | Vite 5          |
| Routing    | React Router v6 |
| Styling    | Custom CSS      |
| Deployment | Vercel          |

## 📁 Project Structure

```text
portfolio-react/
├── public/                 # Images and CV (static files)
├── src/
│   ├── components/         # Navbar, Footer, ProjectCard, ProjectModal, Lightbox, ...
│   ├── pages/              # Home, About, Projects, Gallery
│   ├── hooks/              # useSmoothScroll, useReveal, useDocumentTitle, ...
│   ├── data/               # site.js, projects.js, gallery.js (edit content here)
│   └── styles/             # Page stylesheets
├── index.html
├── vercel.json             # Vercel SPA rewrites and redirects
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
git clone https://github.com/hannan-full-stack-dev/portfolio-react.git
cd portfolio-react
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build
npm run preview
```

## ✏️ Customizing Content

| What                                       | File                            |
| ------------------------------------------ | ------------------------------- |
| Name, contact, CV path, skills, experience | `src/data/site.js`              |
| Projects (cards + popup details)           | `src/data/projects.js`          |
| Gallery photos                             | `src/data/gallery.js`           |
| Images / CV file                           | `public/Images`, `public/Files` |

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own copy:

1. Import the repo on Vercel (Vite is auto-detected)
2. Build command: `npm run build`, Output directory: `dist`
3. `vercel.json` handles SPA routing so `/about`, `/projects` and `/gallery` work on refresh

## 👨‍💻 Developed by

**Hannan Goljar** — Full Stack Developer

[GitHub](https://github.com/hannan-full-stack-dev) · [LinkedIn](https://www.linkedin.com/in/hannan-full-stack-dev/) · [hghannan2@gmail.com](mailto:hghannan2@gmail.com)
