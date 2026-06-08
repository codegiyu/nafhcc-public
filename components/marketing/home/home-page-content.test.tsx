import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { HomePageContent } from '@/components/marketing/home/home-page-content';

vi.mock('@/components/marketing/search-bar', () => ({
  SearchBar: () => <div data-testid="search-bar">Search</div>,
}));

describe('HomePageContent', () => {
  it('renders main homepage sections including overlines and CTA description', () => {
    render(<HomePageContent />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Quality Housing Estates Across Nigeria/i })
    ).toBeInTheDocument();
    expect(screen.getByText('ABOUT NAFHCC')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Building homes and communities for the Air Force family',
      })
    ).toBeInTheDocument();
    expect(screen.getByText('FEATURED ESTATES')).toBeInTheDocument();
    expect(screen.getByText('WHAT WE DO')).toBeInTheDocument();
    expect(screen.getByText('OUR PROCESS')).toBeInTheDocument();
    expect(screen.getByText('AVAILABLE PROPERTY TYPES')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'NAFHCC Estates' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Your Path to Home Ownership' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ready to find your home?' })).toBeInTheDocument();
    expect(
      screen.getByText(/Contact NAFHCC or apply for housing in any of our estates across Nigeria/i)
    ).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('estates')).toBeInTheDocument();
    expect(document.getElementById('services')).toBeInTheDocument();
    expect(document.getElementById('process')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
