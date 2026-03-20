# Samsiani.com — Next.js Portfolio Site

## Project Overview
Award-winning agency portfolio for samsiani.com. Georgian web development agency (since 2009).

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript, static export)
- **Styling:** Tailwind CSS v4 with `@tailwindcss/typography`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Noto Sans Georgian (Google Fonts, weights: 400/500/600/700/900)
- **Utilities:** `clsx` + `tailwind-merge` via `cn()` helper

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home (7 sections)
│   ├── about/              # About page
│   ├── blog/               # Blog listing + [slug] detail
│   ├── contact/            # Contact form page
│   ├── faq/                # FAQ with search + tabs
│   ├── portfolio/          # Portfolio grid + [slug] detail
│   └── services/           # web/ seo/ support/
├── components/
│   ├── animations/         # ScrollReveal, TextReveal, StatsCounter, Marquee, PageTransition
│   ├── home/               # Hero, HorizontalScroll, ServiceRows, SplitSection, BlogPreview, PartnersMarquee, CTASection
│   ├── layout/             # Header, MobileMenu, Footer
│   └── ui/                 # Button, Input, Select, Textarea, Accordion, Tabs, Pagination, FilterBar, Toast, NewsletterForm
├── data/                   # Static data (site, projects, blog-posts, faqs, services)
├── lib/                    # Utilities (cn helper)
└── styles/                 # globals.css (color system, grain texture, animations)
```

## Color System
CSS custom properties with light/dark mode:
- `var(--c-bg)`, `var(--c-bg2)` — backgrounds
- `var(--c-fg)`, `var(--c-fg-muted)` — text
- `var(--c-accent)`, `var(--c-accent-hover)` — red accent (#dc2626)
- `var(--c-border)`, `var(--c-surface)` — borders/cards

Dark mode is toggled via `.dark` class on `<html>`, detected from localStorage or system preference.

## Important Patterns

### CSS Layering
All custom base styles MUST be inside `@layer base { }` in globals.css. Unlayered CSS overrides Tailwind v4 utilities.

### Theme Provider
`ThemeProvider.tsx` is a client component providing `useTheme()` context. `ThemeScript.tsx` is a server component that injects an inline script to prevent dark mode flash.

### Static Pages
Dynamic routes use `generateStaticParams()` in server component page.tsx files, with client content components imported separately (e.g., `blog/[slug]/BlogPostContent.tsx`). Client components cannot export `generateStaticParams`.

### Build Config
- `output: "export"` in next.config.ts for static site generation
- `"type": "module"` in package.json

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build (static export)
npm run start    # Serve production build
```

## Design Standards (established in polish pass)

### No Emojis
All decorative emojis have been replaced with Lucide icons. Do NOT reintroduce emojis anywhere in the UI.

### Image Hover Effect
All images use `grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0` — a subtle desaturated-to-vivid effect. **No scale, no rotate, no brightness/contrast.** The user explicitly rejected movement-based image hovers (scale, rotate) as "shaking/dancing".

### Portfolio Cards
Portfolio cards (both `/portfolio` grid and home HorizontalScroll) use a bottom gradient overlay (`h-2/5 bg-gradient-to-t from-black/70 to-transparent`) with project name and category in white text on the gradient. No separate text below the image.

### Form Inputs
- Error borders/text use `var(--c-accent)` (not `red-500`)
- All inputs have `form-input-hover` class (defined in globals.css: `border-color: var(--c-fg-muted)` on `:hover:not(:focus)`)

### Hero Padding
- Top-level pages (about, faq, contact, blog, portfolio): `pt-32 pb-20 md:pt-44 md:pb-28`
- Service sub-pages: `pt-32 pb-20 md:pt-40 md:pb-28` (intentionally less)

### Typography
- Section overlines: `tracking-[0.2em]` everywhere
- Section h2s: always include `tracking-tight`

### Border Radius
- Primary cards: `rounded-2xl`
- Images/secondary: `rounded-xl`

### Category Pills
Standard size: `px-3 py-1`

### Search Icons
Standard size: `size={18}`

### Dark Mode
`globals.css` has dark mode variants for `.scratchy-underline` and `.scribble-circle` (using `%23ff5142` stroke color).

### Contact Page Button
Uses the `<Button>` component (not inline `<button>`).

## All Content is in Georgian
All user-facing text is in Georgian language. The site targets the Georgian market.
