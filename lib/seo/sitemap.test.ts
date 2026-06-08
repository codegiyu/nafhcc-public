import { describe, expect, it } from 'vitest';
import { buildSitemapEntries } from '@/lib/seo/sitemap';

describe('buildSitemapEntries', () => {
  it('includes live routes', () => {
    const entries = buildSitemapEntries();
    expect(entries).toHaveLength(3);
    expect(entries.map(entry => entry.url)).toEqual([
      'http://localhost:3000/',
      'http://localhost:3000/contact',
      'http://localhost:3000/search',
    ]);
  });

  it('attaches homepage image metadata', () => {
    const entries = buildSitemapEntries();
    expect(entries[0]?.images?.length).toBeGreaterThan(0);
  });
});
