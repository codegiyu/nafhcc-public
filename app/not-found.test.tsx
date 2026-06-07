import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('@/lib/content/homepage', () => ({
  getHomepageContent: () => ({
    estates: {
      items: [{ title: 'NAF Valley Estate, Asokoro', href: '/estates/naf-valley-estate-asokoro' }],
    },
  }),
}));

describe('NotFoundPage', () => {
  it('renders within marketing chrome', async () => {
    const NotFoundPage = (await import('@/app/not-found')).default;
    render(<NotFoundPage />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});
