import { describe, expect, it } from 'vitest';
import {
  contactFormSchema,
  formatContactFieldErrors,
  getContactFieldError,
  isContactFormValid,
} from '@/lib/contact/schema';

const validPayload = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '08031234567',
  subject: 'Housing Application Inquiry' as const,
  message: 'I would like to schedule a site visit.',
};

describe('contactFormSchema', () => {
  it('accepts a valid payload', () => {
    const result = contactFormSchema.safeParse(validPayload);

    expect(result.success).toBe(true);
  });

  it('rejects missing required fields', () => {
    const result = contactFormSchema.safeParse({ ...validPayload, firstName: '' });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(formatContactFieldErrors(result.error).firstName).toBeTruthy();
    }
  });

  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({ ...validPayload, email: 'not-an-email' });

    expect(result.success).toBe(false);
  });

  it('rejects unknown subject', () => {
    const result = contactFormSchema.safeParse({ ...validPayload, subject: 'Other' });

    expect(result.success).toBe(false);
  });

  it('rejects phone numbers with too few digits', () => {
    const result = contactFormSchema.safeParse({ ...validPayload, phone: '12345' });

    expect(result.success).toBe(false);
  });

  it('reports validity via isContactFormValid', () => {
    expect(isContactFormValid(validPayload)).toBe(true);
    expect(isContactFormValid({ ...validPayload, email: '' })).toBe(false);
  });

  it('returns a field-specific error via getContactFieldError', () => {
    const error = getContactFieldError('email', { ...validPayload, email: 'bad' });

    expect(error).toBeTruthy();
  });

  it('trims whitespace from string fields', () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      firstName: '  Jane  ',
      message: '  Hello  ',
    });

    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.firstName).toBe('Jane');
      expect(result.data.message).toBe('Hello');
    }
  });
});
