import { describe, expect, it } from 'vitest';
import { buildAdminNotificationEmail } from '@/lib/email/templates/admin-notification';
import {
  buildSenderConfirmationEmail,
  getSenderConfirmationCeoName,
} from '@/lib/email/templates/sender-confirmation';

const submission = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '08031234567',
  subject: 'Housing Application Inquiry' as const,
  message: 'I am interested in NAF Valley Estate.',
};

describe('email templates', () => {
  it('renders admin notification with submission details and reply link', () => {
    const email = buildAdminNotificationEmail(submission, new Date('2024-06-08T14:34:00'));

    expect(email.subject).toContain('Housing Application Inquiry');
    expect(email.html).toContain('New Contact Form Submission');
    expect(email.html).toContain('John Doe');
    expect(email.html).toContain('john.doe@example.com');
    expect(email.html).toContain('Reply to Sender');
    expect(email.html).toContain('mailto:john.doe%40example.com');
    expect(email.text).toContain('Message: I am interested in NAF Valley Estate.');
  });

  it('renders sender confirmation with CEO signature and response window', () => {
    const email = buildSenderConfirmationEmail(submission);

    expect(email.subject).toContain('received your message');
    expect(email.html).toContain('We Have Received Your Message');
    expect(email.html).toContain('Dear John Doe');
    expect(email.html).toContain('What happens next?');
    expect(email.html).toContain('24 hours');
    expect(email.html).toContain(getSenderConfirmationCeoName());
    expect(email.html).toContain('Managing Director / CEO');
  });
});
