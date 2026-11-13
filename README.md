# Md. Moklasur Rahman Golap - Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build / preview
```bash
npm run build      # creates /dist
npm run preview
```

## Deploy on Netlify
`netlify.toml` is already set up (build command `npm run build`, publish folder `dist`,
SPA redirect so /about, /projects, /gallery work on refresh, and old *.html links redirect).

- Drag & drop: run `npm run build`, then drop the `dist` folder on Netlify.
- Or connect a Git repo: Netlify reads `netlify.toml` automatically.

## Where to edit things
| What | File |
| --- | --- |
| Name, email, phone, CV path | `src/data/site.js` |
| Skills / experience / approach cards | `src/data/site.js` |
| Projects: cards AND popup details (add/remove/edit) | `src/data/projects.js` |
| Gallery photos, titles, years | `src/data/gallery.js` |
| Images / CV file | `public/Images`, `public/Files` |
| Page styles (unchanged from the HTML version) | `src/styles/style.css`, `src/styles/gallery.css` |
