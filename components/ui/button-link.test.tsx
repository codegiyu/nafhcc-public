import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ButtonLink } from '@/components/ui/button-link';

describe('ButtonLink', () => {
  it('renders a link with button styling and cursor pointer', () => {
    render(<ButtonLink href="/contact">Apply Now</ButtonLink>);

    const link = screen.getByRole('link', { name: 'Apply Now' });
    expect(link).toHaveAttribute('href', '/contact');
    expect(link.className).toMatch(/cursor-pointer/);
  });
});
