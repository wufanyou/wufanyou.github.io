# wufanyou.github.io

Personal academic website for [Fanyou Wu](https://wufanyou.github.io). Built with Next.js and deployed to GitHub Pages.

## Branches

- `main` — source code
- `webpage` — static build served by GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
./scripts/deploy.sh
```

Builds the site, pushes source to `main`, and pushes static output to `webpage`.

## Data Files

| File | Content |
|------|---------|
| `src/data/publications.bib` | Publications (BibTeX) |
| `src/data/competitions.json` | Competition entries |
| `src/data/presentations.json` | Talks and posters |
| `src/data/news.json` | News items (`"show": true/false`) |
