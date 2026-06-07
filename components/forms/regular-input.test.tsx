import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RegularInput } from '@/components/forms/regular-input';

describe('RegularInput', () => {
  it('renders labelled input with lg size class', () => {
    render(<RegularInput id="name" label="Full name" size="lg" />);

    expect(screen.getByLabelText('Full name')).toHaveClass('h-11');
  });
});
