# AutoForm Genius 🚀

> **Note**: This project is currently under active development. Features and documentation are being added regularly.

## Overview

AutoForm Genius is an innovative web application that revolutionizes form creation and data analysis through the power of artificial intelligence. It enables users to describe their form requirements in plain English and instantly generates fully functional forms. Beyond form creation, it provides intelligent data analysis, offering actionable insights and answering questions about the collected data.

### Key Features
- **AI-Powered Form Generation**: Create forms by simply describing what you need
- **Smart Data Analysis**: Get instant insights from your form responses
- **Natural Language Interface**: Interact with your data using everyday language
- **Real-time Form Preview**: See your form take shape as you describe it
- **Data Visualization**: Understand your form responses through intuitive charts and reports

## Project Structure

The project is divided into two main components:

### Frontend (`/frontend`)
A modern React application built with:
- React 19 + TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

### Backend (`/backend`)
A robust Express.js server that handles:
- Form generation logic
- AI integration
- Data processing
- API endpoints
- Database operations

## Documentation

📁 [Frontend Documentation](./frontend/README.md)  
📁 [Backend Documentation](./backend/README.md)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/barakadanny/AutoForm_Gen.git
   cd autoform
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Add your API keys and configuration

5. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Framer Motion
- **State Management**: React Context
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier + Husky

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: [To be determined]
- **AI Integration**: [To be determined]
- **Testing**: Jest
- **API Documentation**: Swagger/OpenAPI

### AI Capabilities
- Natural Language Processing for form generation
- Data analysis and insight generation
- Question answering about form responses
- [Specific AI provider to be determined]

## Contributing

We welcome contributions to AutoForm Genius! Here's how you can help:

1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Share your ideas for new features or improvements
3. **Submit Code**: Fork the repository and create a pull request
4. **Improve Documentation**: Help make our docs clearer and more comprehensive

### Areas for Contribution
- Frontend UI/UX improvements
- Backend API enhancements
- AI integration and optimization
- Testing coverage
- Documentation
- Performance optimization

## Future Plans

- [ ] Implement user authentication
- [ ] Add form templates library
- [ ] Enhance AI capabilities
- [ ] Add collaborative features
- [ ] Implement form analytics dashboard
- [ ] Add export/import functionality
- [ ] Support multiple languages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration opportunities, please reach out to [your contact information]. 