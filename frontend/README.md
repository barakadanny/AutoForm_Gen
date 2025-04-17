# Frontend Documentation

## Overview
The frontend of this project is built with React, TypeScript, and Vite, providing a modern, type-safe, and performant user interface. It follows a component-based architecture with a focus on maintainability and scalability.

## Architecture

### Folder Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── assets/        # Static assets (images, fonts)
├── styles/        # CSS modules and global styles
├── types/         # TypeScript type definitions
├── services/      # API service functions
├── context/       # React context providers
└── test/          # Test files and setup
```

### Architecture Decisions
- **Component-Based Architecture**: Promotes reusability and maintainability
- **TypeScript**: Ensures type safety and better developer experience
- **Vite**: Provides fast development and build times
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Testing Setup**: Vitest and React Testing Library for comprehensive testing

## Core Components

### Layout Components
- `App.tsx`: Root component and routing setup
- `Layout.tsx`: Main layout wrapper
- `Header.tsx`: Navigation header
- `Footer.tsx`: Page footer

### Form Components
- `FormBuilder.tsx`: Dynamic form generator
- `FormPreview.tsx`: Form preview component
- `FieldRenderer.tsx`: Field type renderer

## Design System

### Styling Conventions
- **Tailwind CSS**: Primary styling solution
- **CSS Modules**: For component-specific styles
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: System preference-based

### Typography
- Primary Font: Inter
- Heading Sizes: h1-h6 with consistent scaling
- Body Text: 16px base size

### Colors
- Primary: #646cff
- Secondary: #535bf2
- Background: Light/Dark mode variants
- Text: High contrast for accessibility

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=AutoForm
```

## Key Dependencies

### Core
- `react`: UI library
- `react-dom`: DOM rendering
- `typescript`: Type safety
- `vite`: Build tool and dev server

### Styling
- `tailwindcss`: Utility-first CSS
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes

### Development
- `eslint`: Code linting
- `prettier`: Code formatting
- `husky`: Git hooks
- `vitest`: Testing framework

## Testing

### Test Structure
- Unit tests for components
- Integration tests for features
- API mocking with MSW
- Coverage reporting

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm test -- --watch
```

## Future Improvements

### Planned Features
- [ ] Form template library
- [ ] Real-time collaboration
- [ ] Advanced form validation
- [ ] Form analytics dashboard

### Technical Debt
- [ ] Improve test coverage
- [ ] Optimize bundle size
- [ ] Add performance monitoring
- [ ] Implement error tracking

## Changelog

### [Unreleased]
- Initial project setup
- Basic form builder implementation
- Testing infrastructure
- Documentation setup
