import { describe, expect, it } from 'vitest';
import { getHomepageContent, validateHomepageContent } from '@/lib/content/homepage';

describe('homepage content', () => {
  it('passes structural validation', () => {
    const content = getHomepageContent();
    expect(validateHomepageContent(content)).toEqual([]);
  });

  it('includes hero, estates, services, overlines, and CTA sections', () => {
    const content = getHomepageContent();

    expect(content.hero.title).toContain('Quality Housing');
    expect(content.about.overline).toBe('ABOUT NAFHCC');
    expect(content.about.title).toContain('Trusted housing');
    expect(content.estates.overline).toBe('FEATURED ESTATES');
    expect(content.services.overline).toBe('WHAT WE DO');
    expect(content.process.overline).toBe('OUR PROCESS');
    expect(content.propertyTypes.overline).toBe('AVAILABLE PROPERTY TYPES');
    expect(content.estates.items.length).toBeGreaterThanOrEqual(3);
    expect(content.services.items.length).toBe(4);
    expect(content.process.items.length).toBe(4);
    expect(content.cta.description).toContain('Contact NAFHCC');
    expect(content.cta.primaryAction.href).toBe('/contact');
  });

  it('uses valid estate detail paths', () => {
    const content = getHomepageContent();

    for (const estate of content.estates.items) {
      expect(estate.href).toMatch(/^\/estates\/[a-z0-9-]+$/);
    }
  });
});
