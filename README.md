# 🏛️ Md. Moklasur Rahman Golap — Portfolio

A modern, responsive portfolio website for an **Architectural Engineer & 3D Visualizer**, showcasing architectural designs, 3D visualizations and field-supervised civic projects. Built as a fast single-page app with **React + Vite**.

<img width="720" height="405" alt="preview" src="https://github.com/user-attachments/assets/e13f68eb-bbda-456e-b0cc-e611757882d2" />


## ✨ Features

- **Multi-page SPA** — Home, About, Projects and Gallery with React Router
- **Project showcase** — cards with a detailed popup (overview, location, year, role, materials, tools) and Prev/Next navigation
- **Photo gallery** — categorized gallery with a full-screen lightbox
- **Custom smooth scrolling** — buttery wheel scrolling with no extra library (respects reduced-motion & touch devices)
- **Scroll-reveal animations** and an elegant dark/gold design
- **Accessible modals** — focus management, scroll lock, keyboard-friendly
- **Downloadable CV** from the About page
- **Easy content editing** — all text, projects and gallery items live in simple data files (no code changes needed)
- **Netlify-ready** — SPA redirects and legacy `.html` URL redirects included

## 🛠️ Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router v6 |
| Styling | Custom CSS |
| Deployment | Netlify |

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
├── netlify.toml            # Netlify build and redirect config
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

​```bash
git clone https://github.com/<your-username>/portfolio-react.git
cd portfolio-react
npm install
npm run dev        # http://localhost:5173
​```

Production build:

​```bash
npm run build
npm run preview
​```

## ✏️ Customizing Content

| What | File |
| --- | --- |
| Name, contact, CV path, skills, experience | `src/data/site.js` |
| Projects (cards + popup details) | `src/data/projects.js` |
| Gallery photos | `src/data/gallery.js` |
| Images / CV file | `public/Images`, `public/Files` |

## 🌐 Deployment

Connect the repo to Netlify — `netlify.toml` configures everything automatically
(build: `npm run build`, publish: `dist`).

## 👨‍💻 Developed by

**Hannan Goljar** — Full Stack Developer
[GitHub](https://github.com/hannan-full-stack-dev) · [LinkedIn](https://www.linkedin.com/in/hannan-full-stack-dev/) · hghannan2@gmail.com
