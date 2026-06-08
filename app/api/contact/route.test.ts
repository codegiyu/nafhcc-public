import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { resetContactRateLimitStore } from '@/lib/contact/rate-limit';

const sendContactEmails = vi.fn();

vi.mock('@/lib/email/send-contact-emails', () => ({
  sendContactEmails,
  ContactMailNotConfiguredError: class ContactMailNotConfiguredError extends Error {
    name = 'ContactMailNotConfiguredError';
  },
}));

const validPayload = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '08031234567',
  subject: 'Housing Application Inquiry',
  message: 'I would like to schedule a site visit.',
};

async function postContact(body: unknown, ip = '127.0.0.1') {
  const { POST } = await import('@/app/api/contact/route');

  return POST(
    new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': ip,
      },
      body: JSON.stringify(body),
    })
  );
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    sendContactEmails.mockReset();
    resetContactRateLimitStore();
  });

  afterEach(() => {
    resetContactRateLimitStore();
  });

  it('returns 400 for invalid payload', async () => {
    const response = await postContact({ ...validPayload, email: 'bad-email' });
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error.code).toBe('VALIDATION_ERROR');
    expect(json.error.details.email).toBeTruthy();
  });

  it('returns 200 on successful submission', async () => {
    sendContactEmails.mockResolvedValue(undefined);

    const response = await postContact(validPayload);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data.ok).toBe(true);
    expect(sendContactEmails).toHaveBeenCalledOnce();
  });

  it('returns 503 when mail is not configured', async () => {
    const { ContactMailNotConfiguredError } = await import('@/lib/email/send-contact-emails');
    sendContactEmails.mockRejectedValue(new ContactMailNotConfiguredError());

    const response = await postContact(validPayload);
    const json = await response.json();

    expect(response.status).toBe(503);
    expect(json.error.code).toBe('MAIL_NOT_CONFIGURED');
  });

  it('returns 429 when rate limit is exceeded', async () => {
    sendContactEmails.mockResolvedValue(undefined);
    const ip = '10.0.0.99';

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await postContact(validPayload, ip);
      expect(response.status).toBe(200);
    }

    const blocked = await postContact(validPayload, ip);
    const json = await blocked.json();

    expect(blocked.status).toBe(429);
    expect(json.error.code).toBe('RATE_LIMITED');
  });
});
