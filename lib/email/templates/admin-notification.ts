import type { ContactFormInput } from '@/lib/contact/schema';
import { siteConfig } from '@/lib/seo/site-config';
import {
  emailButton,
  emailDetailRow,
  emailLayout,
  escapeHtml,
} from '@/lib/email/templates/shared/layout';

export function buildAdminNotificationEmail(
  submission: ContactFormInput,
  receivedAt: Date
): { subject: string; html: string; text: string } {
  const fullName = `${submission.firstName} ${submission.lastName}`;
  const timestamp = receivedAt.toLocaleString('en-NG', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const bodyHtml = `
    <p style="margin:0 0 16px;">A visitor submitted the contact form on the NAFHCC website. Details are below:</p>
    <p style="margin:0 0 20px;font-size:13px;color:#64748b;">Received on ${escapeHtml(timestamp)}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
      ${emailDetailRow('Full Name', fullName)}
      ${emailDetailRow('Email', submission.email)}
      ${emailDetailRow('Phone', submission.phone)}
      ${emailDetailRow('Subject', submission.subject)}
      ${emailDetailRow('Message', submission.message)}
    </table>
    ${emailButton(`mailto:${encodeURIComponent(submission.email)}`, 'Reply to Sender')}
  `;

  const html = emailLayout({
    title: 'New Contact Form Submission',
    bodyHtml,
  });

  const text = [
    'New Contact Form Submission',
    `Received on ${timestamp}`,
    '',
    `Full Name: ${fullName}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Subject: ${submission.subject}`,
    `Message: ${submission.message}`,
  ].join('\n');

  return {
    subject: `New contact form submission — ${submission.subject}`,
    html,
    text,
  };
}

export function getAdminNotificationSubjectPreview(): string {
  return `New contact form submission — Housing Application Inquiry`;
}

export function getAdminNotificationSignature(): string {
  return siteConfig.shortName;
}
