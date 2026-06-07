import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteSection } from '@/components/layout/site-section';

describe('SiteSection', () => {
  it('sets aria-labelledby when provided', () => {
    const { container } = render(
      <SiteSection labelledBy="section-title">
        <p>Content</p>
      </SiteSection>
    );

    expect(container.querySelector('section')).toHaveAttribute('aria-labelledby', 'section-title');
  });
});
