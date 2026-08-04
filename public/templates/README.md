# MotionSites React + Tailwind Templates

This folder contains three standalone, production-ready React component templates inspired by MotionSites.ai:

1. **`PrismaTemplate.tsx`** — High-impact visual studio template with hanging pill navigation, large fluid typography, and features grid.
2. **`AsmeTemplate.tsx`** — Liquid glassmorphism design with backdrop blur filters, newsletter CTA, and video-powered services grid.
3. **`MichaelSmithTemplate.tsx`** — Dark mode portfolio template with loading counter overlay, dynamic mouse spotlight tracking, bento grid layout, and interactive project cards.

---

## 🛠️ Installation & Requirements

### 1. Install Dependencies
Run the following command in your React project:

```bash
npm install framer-motion lucide-react
```

### 2. Configure Tailwind CSS
Ensure your `tailwind.config.js` has font and keyframe extensions if needed:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif-italic': ['Instrument Serif', 'serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],

}
```

### 3. Add Custom CSS Classes (`index.css`)
Add the following utility classes to your global CSS file:

```css
/* Glassmorphism utility */
.liquid-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Static noise film grain */
.noise-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Gradient accent helper */
.accent-gradient {
  background: linear-gradient(135deg, #89AACC 0%, #DEDBC8 100%);
}
```

---

## 🚀 How to Use

Copy any of the `.tsx` template files into your `src/components/` directory and render it directly:

```tsx
import React from 'react';
import { MichaelSmithTemplate } from './templates/MichaelSmithTemplate';

export const App = () => {
  return <MichaelSmithTemplate />;
};
```
