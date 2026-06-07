import { describe, expect, it } from 'vitest';
import { absoluteUrl, canonicalUrl, normalizePath } from '@/lib/seo/canonical';

describe('canonical', () => {
  it('normalizes paths without trailing slashes', () => {
    expect(normalizePath('/about/')).toBe('/about');
    expect(normalizePath('/')).toBe('/');
  });

  it('builds absolute URLs from site base', () => {
    expect(absoluteUrl('/about')).toBe('http://localhost:3000/about');
    expect(canonicalUrl('/')).toBe('http://localhost:3000/');
  });
});
