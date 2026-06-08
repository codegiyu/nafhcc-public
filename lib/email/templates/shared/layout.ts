import { siteContact } from '@/lib/content/contact';
import { siteConfig } from '@/lib/seo/site-config';

const BRAND_COLOR = '#286da4';

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function emailLayout({
  title,
  bodyHtml,
  footerLines,
}: {
  title: string;
  bodyHtml: string;
  footerLines?: string[];
}): string {
  const footer = footerLines ?? [siteConfig.name, siteContact.address, 'Nigeria'];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 28px;color:#ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:18px;font-weight:700;letter-spacing:0.04em;">
                    <span style="display:inline-block;width:32px;height:32px;line-height:32px;text-align:center;background:rgba(255,255,255,0.15);border-radius:6px;margin-right:8px;">NA</span>
                    ${escapeHtml(siteConfig.shortName)}
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;font-size:22px;font-weight:700;line-height:1.3;">
                    ${escapeHtml(title)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;font-size:15px;line-height:1.6;color:#334155;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 28px;text-align:center;font-size:12px;line-height:1.6;color:#64748b;border-top:1px solid #e2e8f0;">
              ${footer.map(line => escapeHtml(line)).join('<br />')}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function emailButton(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
    <tr>
      <td align="center" style="border-radius:8px;background:${BRAND_COLOR};">
        <a href="${href}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">
          ${escapeHtml(label)}
        </a>
      </td>
    </tr>
  </table>`;
}

export function emailDetailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.04em;width:140px;vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#1e293b;white-space:pre-wrap;">
      ${escapeHtml(value)}
    </td>
  </tr>`;
}
