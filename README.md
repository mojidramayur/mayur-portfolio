# Mayur Mojidra — Portfolio

A modern, professional personal portfolio built with **React + Vite + Tailwind CSS**.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3

## Getting started

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview built output on port 3000
```

## Deploy — GitHub Pages

This project is configured for GitHub Pages under the repo name **`mayur-portfolio`**:

```js
// vite.config.js
base: '/mayur-portfolio/'
```

If you rename your repository, update that `base` value to match (`/your-repo-name/`), otherwise CSS / JS / assets will 404.

### One-time setup

```bash
npm install
git init && git add . && git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/mayur-portfolio.git
git push -u origin main
```

### Deploying the build

```bash
npm run build                # generates dist/
npx gh-pages -d dist         # publishes dist/ to gh-pages branch
```

Then in your repo: **Settings → Pages → Source: `gh-pages` branch / root**.
Your site will be live at `https://<your-username>.github.io/mayur-portfolio/`.

> Alternative: deploy to **Vercel**, **Netlify**, or **Cloudflare Pages** — just remember to set `base: '/'` in `vite.config.js` before building, since those hosts serve from the root.

## Asset paths (important for GitHub Pages)

All current images/PDFs/videos in this build are **external URLs** (placeholders), so they work under any subpath. When you swap in real local assets, follow one of these patterns so the GitHub Pages subpath is respected:

**Option A — `public/` folder (simplest)**
Drop the file in `public/` and reference it with `import.meta.env.BASE_URL`:

```jsx
<img src={`${import.meta.env.BASE_URL}profile-photo.jpg`} alt="..." />
```

**Option B — `src/assets/` folder (Vite-resolved)**
Import it so Vite hashes and rewrites the URL at build time:

```jsx
import profile from './assets/profile-photo.jpg'
<img src={profile} alt="..." />
```

❌ Never use a leading-slash absolute path like `src="/profile-photo.jpg"` — it will break under the `/mayur-portfolio/` subpath.

## Replacing placeholders

All demo assets are clearly named so you can swap them later:

| Where | Replace with |
| --- | --- |
| `profile-photo.jpg` (Hero `<img>`) | Your real profile picture |
| `ltts-logo.png` / `csrbox-logo.png` | Real company logos |
| `ltts-certificate.jpg` / `csrbox-certificate.jpg` | Real internship certificates |
| `project1-document.pdf` | NRTR project document |
| `project3-demo.mp4` | Tender bot demo video |
| `cert-*.jpg` | Real certification images |
| `award-*.jpg` | Real award/trophy photos |
| `gmit-logo.png` | College logo |

Drop them into `public/` and update the `src` paths in the corresponding components.
