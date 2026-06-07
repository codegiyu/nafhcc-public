import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EstateCard } from '@/components/marketing/cards/estate-card';

describe('EstateCard', () => {
  it('renders title, location, badge, and view details link', () => {
    render(
      <EstateCard
        title="NAF Valley Estate, Asokoro"
        location="Asokoro, Abuja"
        href="/estates/naf-valley-estate-asokoro"
        imageUrl="https://images.unsplash.com/photo-1"
        imageAlt="NAF Valley Estate"
        badge="For Sale"
      />
    );

    expect(screen.getByRole('heading', { name: 'NAF Valley Estate, Asokoro' })).toBeInTheDocument();
    expect(screen.getByText('Asokoro, Abuja')).toBeInTheDocument();
    expect(screen.getByText('For Sale')).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /NAF Valley Estate, Asokoro|View Details/ })
    ).toHaveLength(2);
    expect(screen.getByRole('img', { name: 'NAF Valley Estate' })).toBeInTheDocument();
  });
});
