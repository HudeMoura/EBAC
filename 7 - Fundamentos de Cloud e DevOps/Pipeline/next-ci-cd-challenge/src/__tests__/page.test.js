import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Home page', () => {
  it('should render the main heading', () => {
    render(<Page />);
    expect(
      screen.getByText(/get started/i)
    ).toBeInTheDocument();
  });
});
