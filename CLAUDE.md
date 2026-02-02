# Paliva Hutyra - Claude Instructions

## Project Overview

Static website for a Czech fuel business (firewood, coal, briquettes). Built with Astro + Tailwind CSS.

## Structure

```
src/
├── components/   # Reusable Astro components
├── pages/        # Routes: index, drevo, uhli, brikety, cenik
├── layouts/      # BaseLayout.astro (SEO, meta tags)
└── styles/       # global.css (Tailwind + custom classes)
images/           # Product photos
```

## Key Files

- `astro.config.mjs` - Astro config (static output)
- `tailwind.config.mjs` - Custom colors (forest, ember, fire), fonts (Outfit, Inter)

## Design System

**Colors:** forest (#1B4332), ember (#9B2C2C), fire (#DD6B20), cream (#FDF6E3)

**Custom classes:** `.btn-primary`, `.btn-secondary`, `.card`, `.section-padding`

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
```

## Notes

- Language: Czech (lang="cs")
- SEO: Schema.org LocalBusiness JSON-LD included
- Mobile: Floating call button, responsive nav
