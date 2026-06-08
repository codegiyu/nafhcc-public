import type { ContactFormInput } from '@/lib/contact/schema';
import { siteContact } from '@/lib/content/contact';
import { siteConfig } from '@/lib/seo/site-config';
import { emailLayout, escapeHtml } from '@/lib/email/templates/shared/layout';

const CEO_NAME = 'AVM I. S. Adamu';
const CEO_TITLE = 'Managing Director / CEO, NAFHCC';

export function buildSenderConfirmationEmail(submission: ContactFormInput): {
  subject: string;
  html: string;
  text: string;
} {
  const fullName = `${submission.firstName} ${submission.lastName}`;

  const bodyHtml = `
    <p style="margin:0 0 16px;">Dear ${escapeHtml(fullName)},</p>
    <p style="margin:0 0 16px;">
      Thank you for reaching out to the Nigerian Air Force Housing and Construction Company (NAFHCC).
      We have received your message regarding <strong>${escapeHtml(submission.subject)}</strong>
      and our team is already reviewing it.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:#f1f5f9;border-radius:8px;">
      <tr>
        <td style="padding:20px;">
          <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#1e293b;">What happens next?</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#475569;">
            A member of our team will review your inquiry and respond to you within
            <strong>24 hours</strong>. If your request is urgent, please feel free to call us directly at
            <strong>${escapeHtml(siteContact.phone)}</strong>.
          </p>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 24px;">
      We appreciate your interest in NAFHCC and look forward to assisting you.
    </p>
    <p style="margin:0;font-size:15px;line-height:1.6;">
      Warm regards,<br />
      <strong>${escapeHtml(CEO_NAME)}</strong><br />
      ${escapeHtml(CEO_TITLE)}
    </p>
  `;

  const html = emailLayout({
    title: 'We Have Received Your Message',
    bodyHtml,
    footerLines: [
      siteConfig.name,
      siteContact.address,
      'Nigeria',
      `${siteContact.email} | ${siteContact.phone}`,
    ],
  });

  const text = [
    'We Have Received Your Message',
    '',
    `Dear ${fullName},`,
    '',
    `Thank you for reaching out to NAFHCC. We have received your message regarding ${submission.subject}.`,
    '',
    'What happens next?',
    'A member of our team will review your inquiry and respond within 24 hours.',
    `If urgent, call us at ${siteContact.phone}.`,
    '',
    'Warm regards,',
    CEO_NAME,
    CEO_TITLE,
  ].join('\n');

  return {
    subject: 'We have received your message — NAFHCC',
    html,
    text,
  };
}

export function getSenderConfirmationCeoName(): string {
  return CEO_NAME;
}
