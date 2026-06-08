import { describe, expect, it } from 'vitest';
import { generatePropertySearchResults } from '@/lib/demo/generate-property-search-results';

describe('generatePropertySearchResults', () => {
  it('always returns exactly 18 results', () => {
    const results = generatePropertySearchResults({});

    expect(results).toHaveLength(18);
  });

  it('returns deterministic results for the same filters', () => {
    const filters = { location: 'Abuja', type: 'Duplex', price: 'Under ₦10M' };
    const first = generatePropertySearchResults(filters);
    const second = generatePropertySearchResults(filters);

    expect(first).toEqual(second);
  });

  it('returns different results when filters change', () => {
    const abuja = generatePropertySearchResults({ location: 'Abuja' });
    const enugu = generatePropertySearchResults({ location: 'Enugu' });

    expect(abuja[0]?.title).not.toBe(enugu[0]?.title);
  });

  it('uses the selected property type in titles', () => {
    const results = generatePropertySearchResults({ type: 'Plots' });

    for (const result of results) {
      expect(result.title.toLowerCase()).toContain('plot');
    }
  });

  it('uses property-type image paths', () => {
    const results = generatePropertySearchResults({ type: 'Bungalow' });

    for (const result of results) {
      expect(result.imageUrl).toMatch(/^\/images\/property-types\/bungalow-\d\.jpg$/);
    }
  });

  it('generates prices within the selected range', () => {
    const results = generatePropertySearchResults({ price: 'Under ₦10M' });

    for (const result of results) {
      expect(result.priceAmount).toBeLessThan(10_000_000);
    }
  });

  it('generates prices as multiples of ten thousand naira', () => {
    const results = generatePropertySearchResults({});

    for (const result of results) {
      expect(result.priceAmount % 10_000).toBe(0);
    }
  });
});
