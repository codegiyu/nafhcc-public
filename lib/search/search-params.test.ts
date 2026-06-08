import { describe, expect, it } from 'vitest';
import { buildSearchQuery, parseSearchParams } from '@/lib/search/search-params';

const options = {
  locations: ['All Locations', 'Abuja', 'Enugu'],
  types: ['All Types', 'Plots', 'Houses'],
  prices: ['Any Price', 'Under ₦10M', '₦30M+'],
};

describe('search-params', () => {
  it('parses valid search params and defaults page to 1', () => {
    const parsed = parseSearchParams(
      { location: 'Abuja', type: 'Plots', price: 'Under ₦10M', page: '2' },
      options
    );

    expect(parsed).toEqual({
      location: 'Abuja',
      type: 'Plots',
      price: 'Under ₦10M',
      page: 2,
    });
  });

  it('drops invalid filter values', () => {
    const parsed = parseSearchParams({ location: 'Lagos', type: 'Castle', price: 'Free' }, options);

    expect(parsed.location).toBeUndefined();
    expect(parsed.type).toBeUndefined();
    expect(parsed.price).toBeUndefined();
    expect(parsed.page).toBe(1);
  });

  it('builds a query string omitting default filters and page 1', () => {
    const query = buildSearchQuery({
      location: 'Abuja',
      type: 'Plots',
      price: 'Under ₦10M',
      page: 1,
    });

    expect(query).toBe('location=Abuja&type=Plots&price=Under+%E2%82%A610M');
  });

  it('includes page when greater than 1', () => {
    const query = buildSearchQuery({ location: 'Abuja', page: 2 });

    expect(query).toBe('location=Abuja&page=2');
  });

  it('round-trips through parse and build', () => {
    const built = buildSearchQuery({
      location: 'Enugu',
      type: 'Houses',
      price: '₦30M+',
      page: 2,
    });
    const params = Object.fromEntries(new URLSearchParams(built));
    const parsed = parseSearchParams(params, options);

    expect(parsed).toEqual({
      location: 'Enugu',
      type: 'Houses',
      price: '₦30M+',
      page: 2,
    });
  });
});
