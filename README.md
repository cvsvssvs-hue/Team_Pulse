# Team Pulse Marketing - Marketing Agency Website

A complete marketing agency website for Team Pulse Marketing, specializing in Sarasota business growth. Features professional landing page, service pages, case studies, blog, and contact forms with multi-language support.

## 🌍 Multi-Language Support

The site supports 3 languages:
- 🇺🇸 English
- 🇷🇺 Russian (default)
- 🇰🇷 Korean

Language switcher is located in the header.

## ✨ Features

- **Professional Landing Page** with hero section, stats, services preview
- **Service Pages** with detailed descriptions and results metrics
- **Case Studies** showcasing real client success stories
- **Blog** with marketing insights and strategies
- **Contact Forms** for lead generation
- **SEO Optimized** with sitemap, robots.txt, and meta tags
- **Responsive Design** with dark luxury theme
- **Smooth Animations** with Framer Motion
- **Google Search Console** verification ready

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **i18n:** Custom React Context implementation
- **SEO:** Dynamic sitemap and robots.txt generation

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

## Project Structure

```
app/
├── page.tsx                    # Main landing page
├── layout.tsx                  # Root layout with metadata
├── globals.css                 # Global styles
├── about/page.tsx             # About page
├── services/page.tsx          # Services page
├── process/page.tsx           # Process/workflow page
├── contact/page.tsx           # Contact form page
├── case-studies/page.tsx      # Case studies page
├── blog/
│   ├── page.tsx               # Blog index page
│   └── how-to-get-clients-sarasota/
│       └── page.tsx           # Blog article
├── sitemap.ts                 # SEO sitemap generation
├── robots.ts                  # SEO robots.txt generation
└── not-found.tsx              # 404 page

components/
├── LanguageSwitcher.tsx       # Language switcher component
└── ...

lib/
├── language-context.tsx       # Language context and hook
└── translations.ts           # Multi-language strings

public/                        # Static assets
```

## Contact Information

- **Email:** teampulsemarketing1@gmail.com
- **Telegram:** @theteampulse
- **Location:** Sarasota, Florida

## Customization

- Update contact info in `lib/translations.ts`
- Modify services and content in respective page files
- Adjust colors in Tailwind classes
- Add new blog articles in `app/blog/[slug]/page.tsx` format

## SEO Setup

The site includes:
- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt file (`/robots.txt`)
- Google Search Console verification meta tag
- Proper meta tags and Open Graph data

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)
