import nodemailer from 'nodemailer';
import type { ContactFormInput } from '@/lib/contact/schema';
import { buildAdminNotificationEmail } from '@/lib/email/templates/admin-notification';
import { buildSenderConfirmationEmail } from '@/lib/email/templates/sender-confirmation';
import { getSmtpConfig } from '@/lib/email/config';

export class ContactMailNotConfiguredError extends Error {
  constructor() {
    super('Contact email is not configured');
    this.name = 'ContactMailNotConfiguredError';
  }
}

export async function sendContactEmails(submission: ContactFormInput): Promise<void> {
  const config = getSmtpConfig();

  if (!config) {
    throw new ContactMailNotConfiguredError();
  }

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const from = `"${config.fromName}" <${config.fromAddress}>`;
  const adminEmail = buildAdminNotificationEmail(submission, new Date());
  const confirmationEmail = buildSenderConfirmationEmail(submission);

  await transport.sendMail({
    from,
    to: config.mailTo,
    replyTo: submission.email,
    subject: adminEmail.subject,
    html: adminEmail.html,
    text: adminEmail.text,
  });

  await transport.sendMail({
    from,
    to: submission.email,
    subject: confirmationEmail.subject,
    html: confirmationEmail.html,
    text: confirmationEmail.text,
  });
}
