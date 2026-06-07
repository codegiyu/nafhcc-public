import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MarketingSiteHeader } from '@/components/layout/marketing-site-header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('MarketingSiteHeader', () => {
  it('renders primary navigation and mobile menu trigger', () => {
    render(<MarketingSiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Estates' })).toHaveAttribute('href', '/estates');
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Apply Now' })).toHaveAttribute('href', '/contact');
  });

  it('does not mark services link active on homepage by default', () => {
    render(<MarketingSiteHeader />);

    const servicesLinks = screen.getAllByRole('link', { name: 'Services' });
    expect(servicesLinks[0]).not.toHaveAttribute('aria-current', 'page');
  });
});
