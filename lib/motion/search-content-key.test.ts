import { describe, expect, it } from 'vitest';
import { buildSearchContentKey } from '@/lib/motion/search-content-key';

describe('buildSearchContentKey', () => {
  it('builds a stable key from search filters and page', () => {
    expect(
      buildSearchContentKey({
        location: 'Abuja',
        type: 'Duplex',
        price: 'Under 50M',
        page: 2,
      })
    ).toBe('Abuja|Duplex|Under 50M|2');
  });

  it('changes when filters or page change', () => {
    const base = buildSearchContentKey({ page: 1 });
    const nextPage = buildSearchContentKey({ page: 2 });
    const nextFilter = buildSearchContentKey({ location: 'Lagos', page: 1 });

    expect(base).not.toBe(nextPage);
    expect(base).not.toBe(nextFilter);
  });
});
