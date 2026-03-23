# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Fanyou Wu, built with Next.js and deployed as a static site to GitHub Pages. The site showcases publications, competitions, presentations, and professional information.

## Build & Deploy Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Production build (next build → static export to out/)
npm run lint             # ESLint (Next.js + TypeScript rules)
./scripts/deploy.sh      # Full deploy: build, push source to main, force-push static output to webpage branch
```

## Architecture

**Stack:** Next.js 16 (App Router, static export), React 19, TypeScript (strict), Tailwind CSS v4

**Two-branch deployment model:**
- `main` — source code
- `webpage` — static HTML served by GitHub Pages (force-pushed on deploy)

**Key directories:**
- `src/app/` — Next.js App Router pages (home, publication, competition, presentation)
- `src/components/` — React components (Navbar, Footer, PublicationEntry, PublicationPageClient, CategoryIcon)
- `src/lib/` — BibTeX parser (`bibtex.ts`) and Google Scholar citation fetcher (`scholar.ts`)
- `src/data/` — Content data files (publications.bib, competitions.json, presentations.json, news.json)
- `scripts/` — Deploy script and pre-build citation fetcher
- `public/assets/` — Static assets (images, PDFs)

**Content pipeline:**
- Publications are authored in BibTeX format (`src/data/publications.bib`) and parsed at build time by a custom regex-based parser (`src/lib/bibtex.ts`)
- Publications support custom fields: `emoji` (research category), `selected` (homepage highlight), `html`/`pdf`/`code`/`arxiv` (links)

**Path alias:** `@/*` maps to `src/*`

**Static export config** in `next.config.ts`: `output: "export"` with `images: { unoptimized: true }`
