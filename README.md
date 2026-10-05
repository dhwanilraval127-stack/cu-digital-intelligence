# CU Digital Intelligence

Technology built around your business.

Production marketing website for **CU Digital Intelligence** — AI • Data • Automation • Engineering.

## Stack

- **Next.js 15** (App Router, Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS 3.4** + CSS variable design tokens
- **Framer Motion** (used sparingly, reduced-motion aware)
- **Lucide React** icons
- **Zod** validation (client + server)
- **Resend** optional email delivery

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values (optional for dev)
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | For production | Canonical URLs, OG, sitemap, structured data |
| `RESEND_API_KEY` | For email delivery | Server-side only; form works without it |
| `CONTACT_EMAIL` | For email delivery | Where enquiries are sent |

Secrets are read **server-side only** (`process.env` inside server code / API route). Never commit `.env.local`.

## Structure

```
src/
  app/            # App Router pages, API route, sitemap, robots, manifest
  components/     # layout / navigation / hero / services / process / work / about / contact / insights / ui
  lib/            # site config, content data, SEO helpers, validation, rate limiting
public/
  images/         # CU visual assets (hero, process, approach)
  icons/
```

## Deployment (Vercel)

1. Push to a Git repository and import into Vercel.
2. Set environment variables: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_EMAIL`.
3. Deploy. No Docker or custom server required.

Security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors) are set in `next.config.ts`.

## Notes

- The contact endpoint validates with Zod, honeypot-protects and rate-limits (in-memory; swap for a shared store if scaling multi-region).
- No fabricated clients, metrics, testimonials or awards anywhere on the site.
- Concept projects in **Work** are labelled as concept builds, not client work.
