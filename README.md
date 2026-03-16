# Personal Portfolio Website

An elegant, highly professional portfolio website featuring modern glassmorphism design, smooth animations, and state-of-the-art UI/UX patterns.

## Features

- 🎨 **Glassmorphism Design** - Modern, translucent UI elements with backdrop blur effects
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🚀 **Next.js 14** - Built with the latest Next.js features and App Router
- 💎 **TypeScript** - Type-safe development for better code quality
- 🎯 **Modern UI/UX** - Best-in-class user experience patterns

## Pages

- **Homepage** - Concise introduction with preview cards for each section
- **About Me** - Detailed background, skills, and philosophy
- **Professional Experience** - Career timeline and achievements
- **Projects** - Showcase of work with detailed project cards
- **Get in Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **About Page** (`app/about/page.tsx`): Update the personal story, philosophy, and skills
2. **Experience Page** (`app/experience/page.tsx`): Replace with your actual work experience
3. **Projects Page** (`app/projects/page.tsx`): Add your real projects with links
4. **Contact Page** (`app/contact/page.tsx`): Update email, social media links, and form handling

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Glassmorphism utilities are defined in `globals.css`

### Colors & Theme

The color scheme uses purple and blue gradients. You can customize these in:
- `app/globals.css` - CSS variables and gradient definitions
- `tailwind.config.ts` - Tailwind color extensions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available for personal and commercial use.

