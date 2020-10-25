import { render, screen } from '@testing-library/react';
import App from './App';

test('has he made himself known?', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
