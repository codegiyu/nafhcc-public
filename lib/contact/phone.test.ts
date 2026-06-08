import { describe, expect, it } from 'vitest';
import { countPhoneDigits, isValidPhoneNumber, sanitizePhoneInput } from '@/lib/contact/phone';

describe('phone helpers', () => {
  it('strips invalid characters and caps length', () => {
    expect(sanitizePhoneInput('0803abc123!4567extra')).toBe('08031234567');
  });

  it('validates Nigerian local numbers', () => {
    expect(isValidPhoneNumber('09087069086')).toBe(true);
    expect(isValidPhoneNumber('0803 123 4567')).toBe(true);
    expect(isValidPhoneNumber('12345')).toBe(false);
  });

  it('counts digits only', () => {
    expect(countPhoneDigits('0803 123 4567')).toBe(11);
  });
});
