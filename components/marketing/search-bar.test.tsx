import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { buildSearchBarQuery, SearchBar } from '@/components/marketing/search-bar';

const push = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}));

const options = {
  locations: ['All Locations', 'Abuja'],
  types: ['All Types', 'Plots'],
  prices: ['Any Price', 'Under ₦10M'],
};

describe('SearchBar', () => {
  it('renders labeled filter fields and aligned submit button', () => {
    render(<SearchBar options={options} />);

    expect(screen.getByLabelText('Location')).toBeInTheDocument();
    expect(screen.getByLabelText('Property type')).toBeInTheDocument();
    expect(screen.getByLabelText('Price range')).toBeInTheDocument();
    expect(document.getElementById('search-submit')).toHaveClass('h-11');
    expect(screen.getByText('Property search filters')).toHaveClass('sr-only');
  });

  it('builds a query string from selected filters', () => {
    expect(
      buildSearchBarQuery({
        location: 'Abuja',
        type: 'Plots',
        price: 'Under ₦10M',
      })
    ).toBe('location=Abuja&type=Plots&price=Under+%E2%82%A610M');
  });

  it('initializes selects from defaultValues', () => {
    render(
      <SearchBar
        options={options}
        defaultValues={{ location: 'Abuja', type: 'Plots', price: 'Under ₦10M' }}
      />
    );

    expect(screen.getByLabelText('Location')).toHaveTextContent('Abuja');
    expect(screen.getByLabelText('Property type')).toHaveTextContent('Plots');
    expect(screen.getByLabelText('Price range')).toHaveTextContent('Under ₦10M');
  });
});
