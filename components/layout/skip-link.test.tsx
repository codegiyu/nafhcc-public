import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SkipLink } from '@/components/layout/skip-link';

describe('SkipLink', () => {
  it('renders skip link to main content', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content'
    );
  });
});
