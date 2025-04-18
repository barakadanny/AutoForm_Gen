# Component Library

## Core Components

### Layout Components

#### `Layout.tsx`
- **Purpose**: Main layout wrapper
- **Features**:
  - Responsive design
  - Consistent header and footer
  - Flexible content area
- **Usage**:
  ```tsx
  <Layout>
    <YourPageContent />
  </Layout>
  ```

#### `Navbar.tsx`
- **Purpose**: Main navigation
- **Features**:
  - Responsive design
  - Mobile menu
  - Navigation links
- **Props**: None (uses context for auth state)

#### `Footer.tsx`
- **Purpose**: Page footer
- **Features**:
  - Company information
  - Navigation links
  - Social media links
  - Copyright information

### Section Components

#### `HeroSection.tsx`
- **Purpose**: Landing page hero section
- **Features**:
  - AI form generation preview
  - Call-to-action buttons
  - Animated elements
- **Props**: None

#### `FeaturesSection.tsx`
- **Purpose**: Features showcase
- **Features**:
  - Feature cards
  - Icons and descriptions
  - Responsive grid layout

#### `HowItWorksSection.tsx`
- **Purpose**: Process explanation
- **Features**:
  - Step-by-step guide
  - Visual illustrations
  - Interactive elements

#### `WhyChooseUsSection.tsx`
- **Purpose**: Value proposition
- **Features**:
  - Benefit cards
  - Statistics
  - Testimonials

#### `CtaSection.tsx`
- **Purpose**: Call to action
- **Features**:
  - Prominent CTA button
  - Supporting text
  - Visual elements

### UI Components

#### `Button.tsx`
- **Purpose**: Reusable button component
- **Features**:
  - Multiple variants
  - Different sizes
  - Loading state
  - Icon support
- **Props**:
  ```tsx
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: ReactNode;
    children: ReactNode;
  }
  ```

## Component Guidelines

### Naming Conventions
- Use PascalCase for component names
- Use kebab-case for file names
- Prefix shared components with the category (e.g., `Button`, `Input`)

### Props
- Use TypeScript interfaces for props
- Document all required and optional props
- Use meaningful prop names

### Styling
- Use Tailwind CSS classes
- Follow BEM-like naming for custom classes
- Keep styles scoped to components

### Testing
- Write unit tests for all components
- Test different prop combinations
- Test responsive behavior

## Future Components

### Planned Components
- Form builder components
- Form preview components
- Dashboard components
- Authentication components

### Component Library
- Consider using a component library like shadcn/ui
- Implement dark mode support
- Add accessibility features 