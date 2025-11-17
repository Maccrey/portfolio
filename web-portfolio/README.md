# Maccrey Dev Portfolio

Static Next.js site that showcases social-impact projects, skills, and contact links. The app exports to `/out` and deploys to GitHub Pages.

## Stack & Tooling
- Next.js 15 (App Router, `output: "export"`)
- TypeScript + Tailwind CSS tokens + custom glassmorphism components
- Vitest + Testing Library for unit tests, Playwright for e2e/axe runs
- GitHub Actions for CI + GitHub Pages deployment

## Local Development
```bash
npm install
npm run dev # http://localhost:3000
```

### Quality Gates
```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:e2e
npm run build
```

## Environment Variables
All variables live in `.env.local` and are typed via `src/lib/env.ts`.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | optional | Base path when hosting under `username.github.io/repo`. Leave empty for root domains. |
| `NEXT_PUBLIC_ANALYTICS_ID` | optional | GA4 Measurement ID (`G-XXXX`) or Plausible `data-domain`. Presence toggles the analytics feature flag. |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | optional | `ga4` (default) or `plausible`. Controls which script the layout injects. |

## Manual QA Checklist
Browser automation covers most scenarios, but the following require manual review: see [`docs/manual-qa-checklist.md`](docs/manual-qa-checklist.md) for detailed steps covering mobile scroll/typography, theme + OS sync, external forms, and HTTPS/custom domain validation.
