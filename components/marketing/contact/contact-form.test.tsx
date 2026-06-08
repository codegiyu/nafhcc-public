import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { ContactForm } from '@/components/marketing/contact/contact-form';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: { ok: true } }),
      })
    );
  });

  it('renders all required fields and submit button', () => {
    render(<ContactForm subjectOptions={['Housing Application Inquiry', 'General Inquiry']} />);

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('shows validation errors from the API', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Please correct the highlighted fields.',
            details: { email: 'Enter a valid email address' },
          },
        }),
      })
    );

    render(<ContactForm subjectOptions={['General Inquiry']} />);

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    });
    expect(screen.getByText('Please correct the highlighted fields.')).toBeInTheDocument();
  });
});
