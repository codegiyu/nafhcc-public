import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SiteFooter } from '@/components/layout/site-footer';

vi.mock('@/lib/content/homepage', () => ({
  getHomepageContent: () => ({
    estates: {
      items: [
        {
          title: 'NAF Valley Estate, Asokoro',
          href: '/estates/naf-valley-estate-asokoro',
        },
      ],
    },
  }),
}));

describe('SiteFooter', () => {
  it('renders footer landmark with quick links and featured estates', () => {
    render(<SiteFooter />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Featured Estates')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '/gallery');
    expect(screen.getByRole('link', { name: 'NAF Valley Estate, Asokoro' })).toHaveAttribute(
      'href',
      '/estates/naf-valley-estate-asokoro'
    );
  });
});
