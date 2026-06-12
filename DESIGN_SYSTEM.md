# UX/UI Designer Portfolio - Design System Documentation

## Overview

This portfolio website features a custom design system inspired by premium design studios like Oroya.fr. The system emphasizes clean, minimal aesthetics with warm tones and editorial typography.

## Design Philosophy

**Tone & Mood:** Clean, minimal, sophisticated — feels like a premium design studio, not a generic portfolio. Confident but not loud.

## Color System

### Primary Colors
- **Background:** `#F7F5F1` - Warm off-white for a sophisticated feel
- **Foreground:** `#0A0A0A` - Near black for optimal readability
- **Accent:** `#C8FF00` - Electric lime for energy and modern feel
- **Muted:** `#7A7570` - Warm gray for secondary text

### Usage Guidelines
- Use `background` for main page backgrounds
- Use `foreground` for primary text and dark elements
- Use `accent` sparingly for CTAs, highlights, and interactive elements
- Use `muted` for secondary text and labels

## Typography

### Font Families
- **Serif (Headlines):** Playfair Display - Editorial, elegant display font
- **Sans-serif (Body):** DM Sans - Clean, modern, highly readable
- **Monospace (Labels/Tags):** JetBrains Mono - Technical, precise

### Type Scale (Responsive)
- Desktop sizes scale down ~25-30% on mobile
- Base font size: 16px

| Element | Desktop | Mobile |
|---------|---------|--------|
| Display | 72px | 48px |
| H1 | 60px | 40px |
| H2 | 48px | 32px |
| H3 | 36px | 24px |
| H4 | 30px | 20px |
| Body Large | 20px | 16px |
| Body | 16px | 14px |
| Small | 14px | 12px |

## Spacing System

Consistent spacing scale based on 8px grid:

- `xs`: 0.5rem (8px)
- `sm`: 0.75rem (12px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)
- `5xl`: 8rem (128px)

## Components

### Button
**Variants:**
- `primary` - Solid background, high emphasis
- `ghost` - Outlined, medium emphasis
- `text` - Text only with underline on hover, low emphasis

**Sizes:**
- `sm` - Compact (px-4 py-2)
- `md` - Default (px-6 py-3)
- `lg` - Large (px-8 py-4)

**Usage:**
```tsx
<Button variant="primary" size="lg">Call to Action</Button>
<Button variant="ghost" size="md">Secondary Action</Button>
<Button variant="text" size="sm">Tertiary Action</Button>
```

### Tag/Badge
Uppercase monospace labels for categories and technologies.

**Usage:**
```tsx
<Tag>Mobile</Tag>
<Tag>Design System</Tag>
```

### Navigation
**States:**
- Default - Transparent background
- Scrolled - Semi-transparent with backdrop blur
- Mobile - Full-screen overlay menu

**Features:**
- Hamburger menu on mobile (< 768px)
- Active link indicator with accent underline
- Smooth transitions

### Project Card
**Features:**
- Hover lift animation (translateY -8px)
- Image zoom on hover (scale 1.05)
- Category label in monospace
- Tag list
- Aspect ratio: 4:3

### Section Header
Consistent section titles with optional label and description.

**Usage:**
```tsx
<SectionHeader
  label="Portfolio"
  title="My Work"
  description="Optional description text"
/>
```

### Footer
Three-column layout on desktop, stacked on mobile.
- Brand/bio
- Quick links
- Social media icons

## Responsive Breakpoints

### Desktop (1440px)
- Full layout
- Side-by-side columns
- Large typography
- 3-column project grid

### Tablet (768px)
- Adjusted grid (2 columns)
- Slightly reduced type scale
- Navigation stays in header

### Mobile (390px)
- Single column
- Hamburger navigation
- Stacked sections
- Touch-friendly tap targets (min 44px)
- Font sizes scale down ~25-30%

## Animation Guidelines

### Timing
- Fast interactions: 0.3s
- Page transitions: 0.6s
- Use ease-in-out for most transitions

### Motion Library
Using Motion (formerly Framer Motion) for:
- Page entrance animations (fade + slide)
- Hover effects (scale, translateY)
- Scroll-triggered animations (whileInView)

### Best Practices
- Reduce motion for accessibility preferences
- Keep animations subtle and purposeful
- Use stagger delays (0.1s) for list items

## Accessibility

- WCAG AA compliant color contrast
- All interactive elements have focus states
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Touch targets minimum 44x44px on mobile

## File Structure

```
/src
  /app
    /components        # Reusable UI components
      button.tsx
      navigation.tsx
      footer.tsx
      project-card.tsx
      section-header.tsx
      tag.tsx
    /pages            # Page components
      root.tsx
      home.tsx
      work.tsx
      case-study.tsx
      about.tsx
      contact.tsx
      not-found.tsx
    /data             # Data and content
      projects.ts
    routes.tsx        # Router configuration
    App.tsx           # Root component
  /styles
    fonts.css         # Font imports
    theme.css         # Design tokens
    tailwind.css      # Tailwind configuration
    index.css         # Global styles
  /lib
    utils.ts          # Utility functions
```

## Development Notes

- Built with React 18 and TypeScript
- Routing via React Router v7
- Styling with Tailwind CSS v4
- Animations with Motion
- Icons from Lucide React
- Fully responsive across all breakpoints
- No external API dependencies (all data is local)

## Design Inspiration

The design takes inspiration from premium design studios like:
- Oroya.fr - Clean editorial layouts
- Minimal but sophisticated color palette
- Focus on typography hierarchy
- Generous white space
- Premium feel without being overdone
