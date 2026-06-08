import type { SearchBarOptions } from '@/components/marketing/search-bar';

export type ParsedSearchParams = {
  location?: string;
  type?: string;
  price?: string;
  page: number;
};

export type SearchFilters = {
  location?: string;
  type?: string;
  price?: string;
  page?: number;
};

function isAllowedValue(value: string | undefined, options: readonly string[]): string | undefined {
  if (!value || value.trim() === '') {
    return undefined;
  }

  return options.includes(value) ? value : undefined;
}

function parsePage(value: string | undefined): number {
  const parsed = Number.parseInt(value ?? '1', 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
}

export function parseSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
  options: SearchBarOptions
): ParsedSearchParams {
  const location = isAllowedValue(
    typeof searchParams.location === 'string' ? searchParams.location : undefined,
    options.locations.filter(item => !item.startsWith('All'))
  );
  const type = isAllowedValue(
    typeof searchParams.type === 'string' ? searchParams.type : undefined,
    options.types.filter(item => !item.startsWith('All'))
  );
  const price = isAllowedValue(
    typeof searchParams.price === 'string' ? searchParams.price : undefined,
    options.prices.filter(item => item !== 'Any Price')
  );
  const page = parsePage(typeof searchParams.page === 'string' ? searchParams.page : undefined);

  return { location, type, price, page };
}

export function buildSearchQuery(filters: SearchFilters): string {
  const params = new URLSearchParams();

  if (filters.location) {
    params.set('location', filters.location);
  }

  if (filters.type) {
    params.set('type', filters.type);
  }

  if (filters.price) {
    params.set('price', filters.price);
  }

  if (filters.page && filters.page > 1) {
    params.set('page', String(filters.page));
  }

  return params.toString();
}

export function buildSearchHref(action: string, filters: SearchFilters): string {
  const query = buildSearchQuery(filters);

  return query ? `${action}?${query}` : action;
}
