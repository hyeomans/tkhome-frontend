import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const nav = screen.getByRole(
    'navigation',
    /Home/i,
  );
  expect(nav).toBeInTheDocument();
});
