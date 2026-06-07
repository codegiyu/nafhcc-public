import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PropertyTypeCard } from '@/components/marketing/cards/property-type-card';

describe('PropertyTypeCard', () => {
  it('renders image, title, subtitle, and aspect ratio container', () => {
    const { container } = render(
      <PropertyTypeCard
        title="3 Bedroom Terrace Duplex"
        subtitle="Complete units available"
        imageUrl="/images/estate-valley.jpg"
        imageAlt="3 bedroom terrace duplex"
      />
    );

    expect(screen.getByRole('heading', { name: '3 Bedroom Terrace Duplex' })).toBeInTheDocument();
    expect(screen.getByText('Complete units available')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: '3 bedroom terrace duplex' })).toBeInTheDocument();
    expect(container.querySelector('.aspect-\\[4\\/3\\]')).toBeInTheDocument();
  });
});
