/* eslint-disable @next/next/no-img-element */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContactPageContent } from '@/components/marketing/contact/contact-page-content';

vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe('ContactPageContent', () => {
  it('renders hero, info cards, and form', () => {
    render(<ContactPageContent />);

    expect(screen.getByRole('heading', { name: /Get in touch with NAFHCC/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Visit Our Office' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Call Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Email Us' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Office Hours' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Let's start a conversation/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument();
  });
});
