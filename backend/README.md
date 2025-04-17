# Backend Documentation

## Overview
The backend is built with Express.js and TypeScript, providing a robust API for the frontend application. It follows a clean architecture pattern with clear separation of concerns and modular design.

## Architecture

### Folder Structure
```
src/
├── routes/         # API route definitions
├── controllers/    # Route handlers
├── services/       # Business logic
├── models/         # Data models
├── middleware/     # Custom middleware
├── config/         # Configuration files
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
└── test/           # Test files
```

### Architecture Decisions
- **Clean Architecture**: Separation of concerns
- **TypeScript**: Type safety and better maintainability
- **Express.js**: Lightweight and flexible web framework
- **Modular Design**: Easy to extend and maintain
- **Testing First**: Comprehensive test coverage

## API Design

### Endpoints Overview
```
/api
├── /forms          # Form management
│   ├── POST /      # Create form
│   ├── GET /       # List forms
│   └── /:id        # Form operations
├── /auth           # Authentication
│   ├── /login      # User login
│   └── /register   # User registration
└── /ai             # AI services
    └── /generate   # Form generation
```

### Response Format
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
```

## Services

### Authentication
- JWT-based authentication
- Role-based access control
- Session management

### Form Management
- CRUD operations for forms
- Form validation
- Form versioning

### AI Integration
- Form generation
- Field suggestions
- Content analysis

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (for database)

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
PORT=3000
MONGODB_URI=mongodb://localhost:27017/autoform
JWT_SECRET=your-secret-key
NODE_ENV=development
```

## Production Deployment

### Process Manager
```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start dist/server.js

# Monitor application
pm2 monit
```

### Environment Setup
```bash
# Set production environment
export NODE_ENV=production

# Start with PM2
pm2 start ecosystem.config.js
```

## Key Dependencies

### Core
- `express`: Web framework
- `typescript`: Type safety
- `mongoose`: MongoDB ODM

### Middleware
- `cors`: Cross-origin resource sharing
- `morgan`: HTTP request logging
- `helmet`: Security headers
- `compression`: Response compression

### Development
- `nodemon`: Development server
- `jest`: Testing framework
- `supertest`: API testing
- `eslint`: Code linting

## Testing

### Test Structure
- Unit tests for services
- Integration tests for API endpoints
- E2E tests for critical flows

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch
```

## Security

### Implemented Measures
- JWT authentication
- Rate limiting
- Input validation
- CORS configuration
- Security headers

### Best Practices
- Environment variables for secrets
- Regular dependency updates
- Input sanitization
- Error handling

## Future Improvements

### Planned Features
- [ ] Form analytics
- [ ] Real-time collaboration
- [ ] Advanced AI features
- [ ] API documentation

### Technical Debt
- [ ] Improve error handling
- [ ] Add request validation
- [ ] Implement caching
- [ ] Add monitoring

## Changelog

### [Unreleased]
- Initial project setup
- Basic API structure
- Authentication system
- Testing infrastructure
- Documentation setup 