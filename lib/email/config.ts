export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromAddress: string;
  fromName: string;
  mailTo: string;
};

export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const mailTo = process.env.CONTACT_MAIL_TO?.trim();
  const fromAddress = process.env.CONTACT_MAIL_FROM?.trim();
  const fromName = process.env.CONTACT_MAIL_FROM_NAME?.trim() || 'NAFHCC Website';
  const port = Number(process.env.SMTP_PORT ?? '587');
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host || !user || !pass || !mailTo || !fromAddress) {
    return null;
  }

  return {
    host,
    port: Number.isFinite(port) ? port : 587,
    secure,
    user,
    pass,
    fromAddress,
    fromName,
    mailTo,
  };
}
