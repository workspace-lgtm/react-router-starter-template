# 焰切 Yanqie — 牛肉資訊網 DEMO

Traditional Chinese beef information demo for **Alan Chu**, built on the [React Router + Cloudflare Workers](https://developers.cloudflare.com/workers/) starter.

**Brand:** 焰切 / Yanqie (“Flame Cut”)  
**Pages:** 首頁 · 部位 · 等級 · 料理 · 產地

## Stack

- React Router 7 (SSR)
- Cloudflare Workers (`wrangler.json` → worker name `yanqie-beef-demo`)
- Tailwind CSS 4
- TypeScript

## Local development

```bash
npm install
npm run dev
```

App: [http://localhost:5173](http://localhost:5173)

## Typecheck & production build

```bash
npm run typecheck
npm run build
npm run check   # tsc + build + wrangler dry-run
```

## Deploy to Cloudflare Workers

Requires a Cloudflare account and Wrangler auth (`npx wrangler login` or API token).

```bash
npm run build
npm run deploy
```

Preview a version without promoting to production:

```bash
npm run build
npx wrangler versions upload
```

Worker name is set in `wrangler.json` as `yanqie-beef-demo` (typically served on `*.workers.dev` after first deploy).

Without a stored Wrangler login / `CLOUDFLARE_API_TOKEN`, you can still publish a short-lived preview:

```bash
npm run build
npx wrangler deploy --temporary
```

Wrangler prints a `*.workers.dev` URL plus a claim link (valid for a limited time) so you can attach the preview to a real Cloudflare account.

## Demo scope

Sample content only — no database. Navigation covers cuts, grades, cooking tips, and origin/sourcing basics.
