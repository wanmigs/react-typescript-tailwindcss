import React from 'react';
import { render } from '@testing-library/react';
import App from './Home';

test('renders Welcome to 45 George St', () => {
  const { getByText } = render(<App />);
  const spanElement = getByText(/Welcome to 45 George St/i);
  expect(spanElement).toBeInTheDocument();
});
