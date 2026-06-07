import { describe, expect, it } from 'vitest';
import { getSiteImages, siteImages } from '@/lib/seo/site-images';
import { validateSiteImage } from '@/lib/seo/validate';

describe('site-images', () => {
  it('includes url, dimensions, and alt for every registry image', () => {
    for (const image of Object.values(siteImages)) {
      expect(validateSiteImage(image)).toBe(true);
    }
  });

  it('applies env overrides for logo URL', () => {
    process.env.NEXT_PUBLIC_SEO_LOGO_URL = 'https://example.com/logo.png';
    expect(getSiteImages().logo.url).toBe('https://example.com/logo.png');
    delete process.env.NEXT_PUBLIC_SEO_LOGO_URL;
  });

  it('uses local hero estate image', () => {
    expect(getSiteImages().hero.url).toBe('/images/hero-estate.jpg');
  });
});
