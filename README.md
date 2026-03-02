# Tanya Samyak — Profile Website

A modern, responsive profile site for Tanya Samyak, built with **React** and **TypeScript**, ready to deploy on Vercel.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for build and dev server
- **CSS Modules** for scoped styling
- **Vercel** for hosting

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in the `dist/` folder.

## Deploy on Vercel

1. Push this repo to GitHub (or connect your existing repo).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → Import your repository.
4. Vercel will detect the Vite app and use the existing `vercel.json` and build settings.
5. Click **Deploy**.

Or use the Vercel CLI:

```bash
npx vercel
```

## Content

Content is sourced from [Tanya's Google Sites profile](https://sites.google.com/view/tanya-samyak/about) and kept in `src/data/content.ts`. Edit that file to update copy, then rebuild/redeploy.

## Sections

- **About** — Intro, bio, feature link, LinkedIn
- **Education** — Simmons University, City Montessori School
- **Work Experience** — MassDOT, Commonwealth Corporation, MWPC, Sahiyo U.S., Simmons Center for Leadership
- **Leadership** — Simmons Model UN (VP, Treasurer)
- **Projects** — MWSF Stipend Evaluation, ESOL Mapping, Women in Politics capstone
- **In My Queue** — Current reading/listening
- **Writing Sample** — Policy memos, research, and blog summaries
