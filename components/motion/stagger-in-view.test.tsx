import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StaggerInView, StaggerItem } from '@/components/motion/stagger-in-view';

describe('StaggerInView', () => {
  it('renders staggered children', () => {
    render(
      <StaggerInView>
        <StaggerItem>
          <p>First card</p>
        </StaggerItem>
        <StaggerItem>
          <p>Second card</p>
        </StaggerItem>
      </StaggerInView>
    );

    expect(screen.getByText('First card')).toBeInTheDocument();
    expect(screen.getByText('Second card')).toBeInTheDocument();
  });
});
