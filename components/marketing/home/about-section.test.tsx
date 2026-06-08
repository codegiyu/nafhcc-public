import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutSection } from '@/components/marketing/home/about-section';
import { getHomepageContent } from '@/lib/content/homepage';

describe('AboutSection', () => {
  it('renders hero-aligned stat overlay, highlights, and CTA links', () => {
    const content = getHomepageContent();

    render(<AboutSection content={content.about} stats={content.stats} />);

    expect(
      screen.getByRole('heading', {
        name: 'Building homes and communities for the Air Force family',
      })
    ).toBeInTheDocument();
    expect(screen.getByText(content.stats[content.stats.length - 1]!.value)).toBeInTheDocument();
    expect(screen.getByText(content.stats[content.stats.length - 1]!.label)).toBeInTheDocument();
    expect(screen.getByText('Trusted by NAF community')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore our estates/i })).toHaveAttribute(
      'href',
      '/#estates'
    );
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/contact');
  });
});
