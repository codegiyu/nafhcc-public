import { describe, expect, it } from 'vitest';
import { redirectRules, validateRedirectRules } from '@/lib/seo/redirects';

describe('redirects', () => {
  it('has no validation errors for the legacy redirect map', () => {
    expect(validateRedirectRules(redirectRules)).toEqual([]);
  });

  it('maps legacy project URLs to estates', () => {
    const rule = redirectRules.find(entry => entry.source === '/project/naf-valley-estate-asokoro');
    expect(rule?.destination).toBe('/estates/naf-valley-estate-asokoro');
  });
});
