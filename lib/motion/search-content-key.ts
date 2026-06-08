type SearchContentKeyInput = {
  location?: string;
  type?: string;
  price?: string;
  page: number;
};

export function buildSearchContentKey(filters: SearchContentKeyInput): string {
  return [
    filters.location ?? '',
    filters.type ?? '',
    filters.price ?? '',
    String(filters.page),
  ].join('|');
}
