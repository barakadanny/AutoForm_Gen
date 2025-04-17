# Full Stack Project

This is a full-stack project with a React frontend and Express.js backend.

## Project Structure

```
.
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── utils/      # Utility functions
│   │   ├── assets/     # Static assets
│   │   ├── styles/     # CSS modules and styles
│   │   ├── types/      # TypeScript type definitions
│   │   ├── services/   # API services
│   │   └── context/    # React context providers
│   └── ...
└── backend/            # Express.js backend server
    ├── src/
    │   ├── routes/     # API routes
    │   ├── controllers/# Route controllers
    │   ├── services/   # Business logic
    │   ├── models/     # Data models
    │   ├── middleware/ # Custom middleware
    │   ├── config/     # Configuration files
    │   ├── utils/      # Utility functions
    │   └── types/      # TypeScript type definitions
    └── ...
```

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Development Tools

### Frontend
- React with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- Husky for git hooks

### Backend
- Express.js with TypeScript
- Nodemon for development
- CORS for cross-origin requests
- Morgan for logging
- Dotenv for environment variables

## Best Practices

- Follow the established folder structure
- Use TypeScript for type safety
- Write meaningful commit messages
- Keep components and functions small and focused
- Use proper error handling
- Follow RESTful API design principles
- Document your code 