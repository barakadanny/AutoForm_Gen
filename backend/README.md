# AutoForm Genius Backend

This is the backend service for AutoForm Genius, a powerful AI-driven form generation and analysis platform.

## 🚀 Features

- **AI-Powered Form Generation**: Convert natural language descriptions into functional forms
- **Smart Data Analysis**: Get insights and answers from form responses
- **RESTful API**: Clean, well-documented endpoints
- **Type Safety**: Built with TypeScript
- **Scalable Architecture**: Follows clean architecture principles

## 📁 Project Structure

```
src/
├── config/           # Configuration and environment variables
├── controllers/      # Route controllers
├── middleware/       # Custom middleware (error handling, auth, etc.)
├── models/          # Data models and interfaces
├── routes/          # API route definitions
├── services/        # Business logic and AI integration
│   └── ai/          # AI service implementation
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── validators/      # Request validation
└── server.ts        # Main application entry point
```

## 🛠 Tech Stack

- **Framework**: Express.js
- **Language**: TypeScript
- **AI Integration**: OpenAI (to be implemented)
- **Testing**: Jest
- **Code Quality**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   API_PREFIX=/api/v1
   CORS_ORIGIN=http://localhost:5173
   OPENAI_API_KEY=your_api_key_here
   OPENAI_MODEL=gpt-4
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 📚 API Documentation

### Form Generation
- **Endpoint**: `POST /api/v1/forms/generate`
- **Request Body**:
  ```json
  {
    "description": "Create a contact form with name, email, and message fields",
    "options": {
      "includeValidation": true,
      "includeStyling": true
    }
  }
  ```

### Form Analysis
- **Endpoint**: `POST /api/v1/forms/analyze`
- **Request Body**:
  ```json
  {
    "formData": {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, world!"
    },
    "question": "What is the most common topic in the messages?"
  }
  ```

## 🔧 Development

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write tests for new features
- Document complex logic

### Testing
- Unit tests for services and utilities
- Integration tests for API endpoints
- Mock external services (like OpenAI)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 