import { describe, expect, it } from 'vitest';
import robots from '@/app/robots';

describe('robots route', () => {
  it('points crawlers to the sitemap', () => {
    const result = robots();
    expect(result.sitemap).toBe('http://localhost:3000/sitemap.xml');
    expect(result.rules).toMatchObject({
      disallow: ['/api/', '/_next/'],
    });
  });
});
