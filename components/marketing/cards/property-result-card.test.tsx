import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PropertyResultCard } from '@/components/marketing/cards/property-result-card';

describe('PropertyResultCard', () => {
  it('renders hover affordances and pins price to the bottom of the body', () => {
    const { container } = render(
      <PropertyResultCard
        id="demo-1"
        title="3 Bedroom Terrace Duplex — Abuja (Unit 1)"
        location="Abuja"
        priceLabel="₦12,500,000"
        priceAmount={12_500_000}
        imageUrl="/images/property-types/terrace-1.jpg"
        imageAlt="3 bedroom terrace duplex in Abuja"
        propertyType="Duplex"
      />
    );

    const article = container.querySelector('article');
    const body = container.querySelector('.flex.min-h-28');

    expect(article).toHaveClass('group');
    expect(article).toHaveClass('hover:shadow-floating');
    expect(screen.getByText('₦12,500,000')).toBeInTheDocument();
    expect(body?.lastElementChild).toHaveTextContent('₦12,500,000');
  });
});
