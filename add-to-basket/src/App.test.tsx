import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders store title', () => {
  render(<App />);
  const storeTitle = screen.getByText(/Store/i);
  expect(storeTitle).toBeInTheDocument();
});
