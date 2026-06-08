export const PHONE_INPUT_MAX_LENGTH = 16;

export function sanitizePhoneInput(value: string): string {
  const cleaned = value.replace(/[^\d+\s()-]/g, '');

  return cleaned.slice(0, PHONE_INPUT_MAX_LENGTH);
}

export function countPhoneDigits(value: string): number {
  return value.replace(/\D/g, '').length;
}

export function isValidPhoneNumber(value: string): boolean {
  const digits = value.replace(/\D/g, '');

  if (digits.startsWith('234')) {
    return digits.length >= 12 && digits.length <= 13;
  }

  return digits.length >= 10 && digits.length <= 11;
}
