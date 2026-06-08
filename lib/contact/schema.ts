import { z } from 'zod';

export const CONTACT_SUBJECTS = [
  'Housing Application Inquiry',
  'Estate Information Request',
  'Partnership Inquiry',
  'General Inquiry',
] as const;

const trimmedString = (max: number) =>
  z.string().trim().min(1, 'This field is required').max(max, `Must be ${max} characters or fewer`);

export const contactFormSchema = z.object({
  firstName: trimmedString(80),
  lastName: trimmedString(80),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Enter a valid email address')
    .max(254),
  phone: trimmedString(30),
  subject: z.enum(CONTACT_SUBJECTS, { message: 'Select a valid subject' }),
  message: trimmedString(5000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function formatContactFieldErrors(
  error: z.ZodError<ContactFormInput>
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (typeof field === 'string' && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }

  return fieldErrors;
}
