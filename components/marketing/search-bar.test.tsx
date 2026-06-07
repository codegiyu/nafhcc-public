import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchBar } from '@/components/marketing/search-bar';

const options = {
  locations: ['All Locations', 'Abuja'],
  types: ['All Types', 'Plots'],
  prices: ['Any Price', 'Under ₦10M'],
};

describe('SearchBar', () => {
  it('renders labeled filter fields and submit button', () => {
    render(<SearchBar options={options} />);

    expect(screen.getByLabelText('Location')).toBeInTheDocument();
    expect(screen.getByLabelText('Property type')).toBeInTheDocument();
    expect(screen.getByLabelText('Price range')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search Properties/i })).toBeInTheDocument();
    expect(screen.getByText('Property search filters')).toHaveClass('sr-only');
  });
});
