import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputWrapper } from '@/components/forms/input-wrapper';
import { Input } from '@/components/ui/input';

describe('InputWrapper', () => {
  it('associates label with control', () => {
    render(
      <InputWrapper label="Email" htmlFor="email">
        <Input id="email" type="email" />
      </InputWrapper>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders hint text when provided', () => {
    render(
      <InputWrapper label="Phone" htmlFor="phone" helpText="Include country code.">
        <Input id="phone" />
      </InputWrapper>
    );

    expect(screen.getByText('Include country code.')).toBeInTheDocument();
  });

  it('shows error instead of hint when both are provided', () => {
    render(
      <InputWrapper
        label="Phone"
        htmlFor="phone"
        helpText="Include country code."
        fieldError="Required">
        <Input id="phone" />
      </InputWrapper>
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Required');
    expect(screen.queryByText('Include country code.')).not.toBeInTheDocument();
  });

  it('hides label visually when hideLabel is set', () => {
    render(
      <InputWrapper label="Search" htmlFor="search" hideLabel>
        <Input id="search" />
      </InputWrapper>
    );

    expect(screen.getByText('Search')).toHaveClass('sr-only');
  });
});
