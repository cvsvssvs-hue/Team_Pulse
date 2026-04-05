# Team Pulse - Sakura Marketing Agency Landing Page

A premium marketing agency landing page built with Next.js, featuring a dark luxury design with pink sakura accents. Showcases branding, content creation, and lead generation services.

## 🌍 Multi-Language Support

The site supports 3 languages:
- 🇺🇸 English
- 🇷🇺 Russian (default)
- 🇰🇷 Korean

Language switcher is located in the header next to the "Start project" button.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **i18n:** Custom React Context implementation

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm run start
```

## Deploy on Vercel

The easiest way to deploy is using Vercel:

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy automatically

## Customization

- Update contact info in `app/page.tsx`
- Modify services, stats, and content as needed
- Adjust colors in Tailwind classes

## Project Structure

```
app/
  page.tsx          # Main landing page component
  layout.tsx        # App layout (auto-generated)
  globals.css       # Global styles
public/             # Static assets
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
