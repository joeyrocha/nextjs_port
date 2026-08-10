# jrochaperez.com

Personal portfolio for Joey Rocha-Perez — Business Systems Analyst. Built with Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui-style primitives, and framer-motion, in a dark-by-default "data terminal" aesthetic.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npm run typecheck
```

## Content

All copy lives in typed data files under `src/data/` — edit these instead of the components:

- `site.ts` — name, positioning line, contact email, social links
- `about.ts`, `skills.ts`, `experience.ts`, `education.ts`, `certifications.ts`, `community.ts`, `humor.ts`
- `projects.ts` — project cards (add/remove entries freely; `image`, `liveUrl`, `repoUrl` are all optional)

## Placeholders to fill in

- **Hero images** — `public/images/profile.jpg` (avatar) and `public/images/hero-image.png` (supporting graphic) are wired in as defaults via `src/components/hero-media.tsx`; swap the files or pass different `avatarSrc`/`accentSrc` props.
- **Project thumbnails** — each entry in `src/data/projects.ts` renders a labeled `[[ image: ... ]]` placeholder until you set an `image` path.
- **Project live/repo links** — several entries have `// [[repo: add link if public]]` comments; add `liveUrl`/`repoUrl` once you have them.
- **GitHub handle** — `src/data/site.ts` defaults `social.github` to `github.com/joeyrocha`; confirm or update.
- **Phone number** — `site.showPhone` is `false` and `site.phone` is a placeholder in `src/data/site.ts`; flip it on and fill it in if you want a phone number shown.

## Deploying

No server-side dependencies beyond static generation and Next.js image optimization — ready to deploy on Vercel as-is.
