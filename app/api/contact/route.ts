import { NextResponse } from 'next/server';
import { contactFormSchema, formatContactFieldErrors } from '@/lib/contact/schema';
import { checkContactRateLimit } from '@/lib/contact/rate-limit';
import { ContactMailNotConfiguredError, sendContactEmails } from '@/lib/email/send-contact-emails';

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');

  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export async function POST(request: Request) {
  const rateLimit = checkContactRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: {
          code: 'RATE_LIMITED',
          message: 'Too many submissions. Please try again later.',
        },
      },
      {
        status: 429,
        headers: rateLimit.retryAfterSeconds
          ? { 'Retry-After': String(rateLimit.retryAfterSeconds) }
          : undefined,
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: 'INVALID_JSON', message: 'Request body must be valid JSON.' } },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Please correct the highlighted fields.',
          details: formatContactFieldErrors(parsed.error),
        },
      },
      { status: 400 }
    );
  }

  try {
    await sendContactEmails(parsed.data);
  } catch (error) {
    if (error instanceof ContactMailNotConfiguredError) {
      console.error('[contact] SMTP is not configured');

      return NextResponse.json(
        {
          error: {
            code: 'MAIL_NOT_CONFIGURED',
            message: 'Contact form is temporarily unavailable. Please call or email us directly.',
          },
        },
        { status: 503 }
      );
    }

    console.error('[contact] Failed to send email', error);

    return NextResponse.json(
      {
        error: {
          code: 'SEND_FAILED',
          message: 'We could not send your message. Please try again shortly.',
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ data: { ok: true } });
}
