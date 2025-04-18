# Testing Guide

## Testing Setup

### Tools
- **Vitest**: Fast and modern testing framework
- **React Testing Library**: Component testing utilities
- **MSW**: API mocking
- **Jest DOM**: DOM testing utilities

### Configuration
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

## Testing Strategies

### Unit Testing
- Test individual components in isolation
- Mock external dependencies
- Test component rendering and interactions

### Integration Testing
- Test component interactions
- Test routing and navigation
- Test form submissions and data flow

### E2E Testing
- Test complete user flows
- Test critical paths
- Test error scenarios

## Writing Tests

### Component Tests
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '@/components/ui/button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### API Tests
```typescript
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
  rest.get('/api/forms', (req, res, ctx) => {
    return res(ctx.json({ forms: [] }))
  })
)

describe('API Integration', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('fetches forms successfully', async () => {
    // Test implementation
  })
})
```

## Best Practices

### Test Organization
- Group related tests using `describe`
- Use clear, descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Test Data
- Use factory functions for test data
- Keep test data close to tests
- Use TypeScript for type safety

### Mocking
- Mock external dependencies
- Use MSW for API mocking
- Keep mocks simple and focused

## Coverage

### Running Coverage
```bash
npm run test:coverage
```

### Coverage Goals
- Components: 80%+
- Utilities: 90%+
- Hooks: 90%+
- Services: 80%+

## Common Patterns

### Testing Forms
```typescript
describe('Form', () => {
  it('submits form data', async () => {
    render(<Form />)
    await userEvent.type(screen.getByLabelText('Name'), 'John')
    await userEvent.click(screen.getByText('Submit'))
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John' })
  })
})
```

### Testing Context
```typescript
describe('ThemeContext', () => {
  it('provides theme value', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )
    expect(screen.getByText('dark')).toBeInTheDocument()
  })
})
```

## Future Testing Plans

### Planned Improvements
- Add E2E testing with Cypress
- Implement visual testing
- Add performance testing
- Set up continuous integration 