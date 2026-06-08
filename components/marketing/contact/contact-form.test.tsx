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

    expect(screen.getByRole('button', { name: /Send Message/i })).toBeDisabled();
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('enables submit when all fields are valid', () => {
    render(<ContactForm subjectOptions={['General Inquiry']} />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/^Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/^Phone/i), { target: { value: '09087069086' } });
    fireEvent.change(screen.getByLabelText(/^Message/i), {
      target: { value: 'I would like more information.' },
    });

    expect(screen.getByRole('button', { name: /Send Message/i })).not.toBeDisabled();
  });

  it('shows validation error on blur for empty email', async () => {
    render(<ContactForm subjectOptions={['General Inquiry']} />);

    fireEvent.blur(screen.getByLabelText(/^Email/i));

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('sanitizes phone input to allowed characters', () => {
    render(<ContactForm subjectOptions={['General Inquiry']} />);

    const phoneInput = screen.getByLabelText(/^Phone/i);
    fireEvent.change(phoneInput, { target: { value: '0803abc!12' } });

    expect(phoneInput).toHaveValue('080312');
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
            details: { message: 'Message could not be processed.' },
          },
        }),
      })
    );

    render(<ContactForm subjectOptions={['General Inquiry']} />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/^Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/^Phone/i), { target: { value: '09087069086' } });
    fireEvent.change(screen.getByLabelText(/^Message/i), {
      target: { value: 'I would like more information.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message could not be processed.')).toBeInTheDocument();
    });
    expect(screen.getByText('Please correct the highlighted fields.')).toBeInTheDocument();
  });
});
