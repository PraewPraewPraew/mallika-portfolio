# UX/UI Designer Portfolio Website

A modern, responsive portfolio website built with a comprehensive design system. Features clean minimal aesthetics inspired by premium design studios.

## Features

- 🎨 **Complete Design System** - Colors, typography, spacing, and components
- 📱 **Fully Responsive** - Optimized for desktop (1440px), tablet (768px), and mobile (390px)
- ⚡ **Smooth Animations** - Built with Motion (Framer Motion)
- ♿ **Accessible** - WCAG AA compliant, keyboard navigation, focus states
- 🎯 **5 Pages** - Home, Work, Case Studies, About, Contact
- 🧩 **Reusable Components** - Button, Navigation, Cards, Tags, and more
- 🔍 **SEO Ready** - Semantic HTML structure

## Design System

### Colors
- **Background:** #F7F5F1 (Warm off-white)
- **Foreground:** #0A0A0A (Near black)
- **Accent:** #C8FF00 (Electric lime)
- **Muted:** #7A7570 (Warm gray)

### Typography
- **Headlines:** Playfair Display (Serif)
- **Body:** DM Sans (Sans-serif)
- **Labels:** JetBrains Mono (Monospace)

### Components
- Button (3 variants: primary, ghost, text)
- Navigation (with mobile hamburger menu)
- Project Card (with hover effects)
- Section Header
- Tag/Badge
- Footer
- Scroll to Top button

## Pages

1. **Home** - Hero section, featured projects, about teaser, CTA
2. **Work** - Project grid with category filters (All, App, Web, Design System)
3. **Case Study** - Detailed project breakdowns with problem, research, solution, impact
4. **About** - Bio, skills, tools, work experience, design philosophy
5. **Contact** - Contact form, information, FAQ section

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Build Tool:** Vite

## Responsive Breakpoints

- **Desktop (1440px):** Full layout, 3-column grid, side-by-side sections
- **Tablet (768px):** 2-column grid, adjusted spacing
- **Mobile (390px):** Single column, hamburger menu, stacked sections

## Project Structure

```
/src
  /app
    /components       # Reusable UI components
    /pages           # Page components
    /data            # Project data
    routes.tsx       # Router configuration
    App.tsx          # Root component
  /styles
    fonts.css        # Font imports
    theme.css        # Design tokens
    index.css        # Global styles
  /lib
    utils.ts         # Utility functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Design Philosophy

This portfolio follows a user-centered design approach with emphasis on:

- **Simplicity** - Clean interfaces, generous white space
- **Sophistication** - Editorial typography, premium feel
- **Performance** - Optimized animations, responsive images
- **Accessibility** - Inclusive design for all users

## Documentation

See [DESIGN_SYSTEM.md](/DESIGN_SYSTEM.md) for complete design system documentation including:
- Color usage guidelines
- Typography scale
- Component variants
- Animation timing
- Accessibility standards

## License

© 2026 Alex Rivers. All rights reserved.
