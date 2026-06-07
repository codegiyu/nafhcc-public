import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RegularSelect } from '@/components/forms/regular-select';

describe('RegularSelect', () => {
  it('renders labelled select with options', () => {
    render(
      <RegularSelect
        id="location"
        label="Location"
        value="Abuja"
        onValueChange={() => undefined}
        options={['Abuja', 'Enugu']}
      />
    );

    expect(screen.getByLabelText('Location')).toBeInTheDocument();
    expect(screen.getByText('Abuja')).toBeInTheDocument();
  });
});
