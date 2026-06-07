import { describe, expect, it } from 'vitest';
import { buildSitemapEntries } from '@/lib/seo/sitemap';

describe('buildSitemapEntries', () => {
  it('includes only live routes', () => {
    const entries = buildSitemapEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0]?.url).toBe('http://localhost:3000/');
  });

  it('attaches homepage image metadata', () => {
    const entries = buildSitemapEntries();
    expect(entries[0]?.images?.length).toBeGreaterThan(0);
  });
});
