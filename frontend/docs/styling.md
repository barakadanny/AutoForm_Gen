# Styling Guide

## Overview

This project uses Tailwind CSS as its primary styling solution, combined with Framer Motion for animations. The styling system is designed to be maintainable, scalable, and consistent across the application.

## Tailwind CSS Setup

### Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#f43f5e',
          dark: '#e11d48',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
```

## Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Secondary**: Rose (#f43f5e)
- **Background**: White/Gray
- **Text**: Gray-900/White

### Typography
- **Font Family**: System UI
- **Heading Sizes**:
  - h1: text-4xl md:text-5xl
  - h2: text-3xl md:text-4xl
  - h3: text-2xl md:text-3xl
- **Body Text**: text-base

### Spacing
- **Base Unit**: 4px (1rem = 16px)
- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Section Padding**: py-16 md:py-24

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Component Styling

### Button Component
```tsx
const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border border-gray-300 hover:bg-gray-50',
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
```

### Form Components
```tsx
const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
const labelStyles = 'block text-sm font-medium text-gray-700 mb-1'
```

## Animation Guidelines

### Using Framer Motion
```tsx
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

<motion.div
  variants={fadeIn}
  initial="initial"
  animate="animate"
  exit="exit"
>
  Content
</motion.div>
```

### Animation Principles
- Keep animations subtle and purposeful
- Use consistent timing (0.2s - 0.5s)
- Prefer ease-in-out for smooth transitions
- Avoid excessive animations

## Responsive Design

### Mobile-First Approach
```tsx
// Start with mobile styles
<div className="p-4">
  {/* Add larger screen styles */}
  <div className="md:p-6 lg:p-8">
    Content
  </div>
</div>
```

### Grid System
```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
```

## Best Practices

### Class Organization
- Group related classes
- Use consistent ordering
- Keep classes readable
```tsx
// Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">

// Bad
<div className="rounded-lg shadow-sm bg-white p-4 flex justify-between items-center">
```

### Custom Components
- Use clsx/tailwind-merge for conditional classes
- Keep component styles scoped
- Use TypeScript for type safety

## Future Improvements

### Planned Enhancements
- Dark mode support
- CSS custom properties
- Design token system
- Component theming
- Animation library expansion 