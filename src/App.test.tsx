import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shop title', () => {
  render(<App />);
  const storeTitle = screen.getByText(/Our Products/i);
  expect(storeTitle).toBeInTheDocument();
});
