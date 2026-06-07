import { describe, expect, it } from 'vitest';
import { getHomepageContent, validateHomepageContent } from '@/lib/content/homepage';

describe('homepage content', () => {
  it('passes structural validation', () => {
    const content = getHomepageContent();
    expect(validateHomepageContent(content)).toEqual([]);
  });

  it('includes hero, estates, services, and CTA sections', () => {
    const content = getHomepageContent();

    expect(content.hero.title).toContain('Quality Housing');
    expect(content.estates.items.length).toBeGreaterThanOrEqual(3);
    expect(content.services.items.length).toBe(4);
    expect(content.process.items.length).toBe(4);
    expect(content.cta.primaryAction.href).toBe('/contact');
  });

  it('uses valid estate detail paths', () => {
    const content = getHomepageContent();

    for (const estate of content.estates.items) {
      expect(estate.href).toMatch(/^\/estates\/[a-z0-9-]+$/);
    }
  });
});
