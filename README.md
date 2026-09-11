# Looters Desk v2

Shop ops desk for **Looters Computas** (TradeMe member **#9233545**).

## Principles

- **Zero hallucination** — every listing comes from the live TradeMe member search for 9233545.
- No invented titles, descriptions, prices or answers.
- Printables section hosts real assets only (logo PDF included).

## Features

- **Desk** — overview and rules
- **TradeMe** — live listings from `https://www.trademe.co.nz/a/search?member_listing=9233545`
- **Printables** — download the A4 logo sheet PDF

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Import the GitHub repo `gjphillips555/looters-desk-v2` into Vercel.
2. Deploy. No extra environment variables required for the basic live-listings scraper.

For production-grade reliability later, add TradeMe OAuth consumer keys and switch the fetch to the official Search API (`member_listing=9233545`).

## Member

- Nickname: LootersComputas
- Member number: **9233545**
- Location: Upper Hutt
