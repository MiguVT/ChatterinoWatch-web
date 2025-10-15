# ChatterinoWatch Website

Modern, responsive single-page website for ChatterinoWatch browser extension.

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb3e16f6-ca9e-4448-b8b7-e0a5c68937f5/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

🌐 **Live Site**: [chatterinowatch.miguvt.com](https://chatterinowatch.miguvt.com)

## Stack

- **Bun** - Fast JavaScript runtime and bundler
- **React 18** - UI library with functional components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast dev server and build tool

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Features

- 🎨 Beautiful gradient design with animations
- 📱 Fully responsive layout
- ♿ WCAG 2.1 AA accessibility compliant
- 🎯 Smooth scroll navigation
- ⚡ Optimized performance with code splitting
- 🌙 Dark theme design
- 💫 Subtle hover effects and transitions
- 🔍 Full SEO optimization (Open Graph, Twitter Cards)
- 🤖 robots.txt and sitemap.xml included
- 📦 PWA-ready with manifest.json
- 🚀 Zero-bloat, production-ready code

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Fixed navigation bar with scroll detection
│   ├── Hero.tsx             # Hero section with browser detection
│   ├── Features.tsx         # Features grid (6 cards)
│   ├── Installation.tsx     # Installation guide with dynamic icons
│   ├── ChatterinoSetup.tsx  # Setup instructions with copy button
│   ├── BackToTop.tsx        # Floating scroll-to-top button
│   └── Footer.tsx           # Footer with links
├── hooks/
│   └── useBrowserDetection.ts  # Smart browser & platform detection
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles + Tailwind v4

public/
├── icon.svg                 # Site icon/logo
├── robots.txt               # SEO crawler directives
├── sitemap.xml              # XML sitemap for search engines
└── manifest.json            # PWA manifest

.vscode/
└── settings.json            # Recommended VS Code settings

index.html                   # HTML template with full meta tags
vite.config.ts               # Vite config with code splitting
tsconfig.json                # TypeScript strict configuration
SECURITY.md                  # Security policy
```

## License

MIT
