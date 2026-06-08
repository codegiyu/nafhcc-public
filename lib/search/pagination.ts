export const DEFAULT_PAGE_SIZE = 12;

export type PaginationInput = {
  total: number;
  page: number;
  pageSize?: number;
};

export type PaginationMeta = {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
  start: number;
  end: number;
};

export function getPaginationMeta({
  total,
  page,
  pageSize = DEFAULT_PAGE_SIZE,
}: PaginationInput): PaginationMeta {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const clampedPage = Math.min(Math.max(page, 1), pageCount);
  const start = total === 0 ? 0 : (clampedPage - 1) * pageSize + 1;
  const end = Math.min(clampedPage * pageSize, total);

  return {
    total,
    page: clampedPage,
    pageSize,
    pageCount,
    start,
    end,
  };
}

export function formatResultsSummary(
  meta: Pick<PaginationMeta, 'start' | 'end' | 'total'>
): string {
  if (meta.total === 0) {
    return 'Showing 0 results';
  }

  return `Showing ${meta.start} to ${meta.end} of ${meta.total} results`;
}

export function paginateItems<T>(
  items: T[],
  { page, pageSize = DEFAULT_PAGE_SIZE }: { page: number; pageSize?: number }
): T[] {
  const meta = getPaginationMeta({ total: items.length, page, pageSize });
  const offset = (meta.page - 1) * meta.pageSize;

  return items.slice(offset, offset + meta.pageSize);
}
