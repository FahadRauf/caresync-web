# CareSync Marketing Website

Premium single-page marketing site for **CareSync** — desktop clinic management software for eye clinics.

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Lucide React icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are exported to `out/` — deploy anywhere (Netlify, Vercel, GitHub Pages, any static host).

## Screenshots

Replace placeholder images in `public/screens/` with real CareSync captures:

| File | Used in |
|------|---------|
| `dashboard.png` | Hero, Video section poster |
| `patient-record.png` | Patient Record section |
| `patients.png` | (optional secondary) |
| `directory.png` | Print / PDF / WhatsApp section |
| `insights.png` | Finance section |
| `entries.png` | Finance section (secondary) |
| `login.png` | Security section |

Crop out the Windows title bar and taskbar before adding. Alt+PrintScreen captures the active window only.

## Demo video

Set `demoVideo.src` in `content/site.ts` to a path like `/demo.mp4` (place the file in `public/`).

## Contact & CTA

Fill in `contact` in `content/site.ts` when ready:

```ts
export const contact = {
  phone: "+92 ...",
  whatsapp: "+92 ...",
  email: "clinic@example.com",
  pricingUrl: null,
  demoBookingUrl: "https://...",
};
```

## Content

All marketing copy lives in `content/site.ts`. Product claims are derived from the CareSync user guide and verified against the application source — do not add features not described there.
