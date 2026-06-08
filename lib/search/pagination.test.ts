import { describe, expect, it } from 'vitest';
import {
  DEFAULT_PAGE_SIZE,
  formatResultsSummary,
  getPaginationMeta,
  paginateItems,
} from '@/lib/search/pagination';

describe('pagination', () => {
  it('computes page metadata for a full first page', () => {
    const meta = getPaginationMeta({ total: 18, page: 1, pageSize: 12 });

    expect(meta).toEqual({
      total: 18,
      page: 1,
      pageSize: 12,
      pageCount: 2,
      start: 1,
      end: 12,
    });
  });

  it('computes metadata for the last partial page', () => {
    const meta = getPaginationMeta({ total: 18, page: 2, pageSize: 12 });

    expect(meta.start).toBe(13);
    expect(meta.end).toBe(18);
    expect(meta.pageCount).toBe(2);
  });

  it('clamps page above page count', () => {
    const meta = getPaginationMeta({ total: 18, page: 99, pageSize: 12 });

    expect(meta.page).toBe(2);
    expect(meta.start).toBe(13);
    expect(meta.end).toBe(18);
  });

  it('formats the results summary copy', () => {
    expect(formatResultsSummary({ start: 1, end: 12, total: 18 })).toBe(
      'Showing 1 to 12 of 18 results'
    );
  });

  it('paginates items for the active page', () => {
    const items = Array.from({ length: 18 }, (_, index) => index + 1);
    const pageOne = paginateItems(items, { page: 1, pageSize: DEFAULT_PAGE_SIZE });
    const pageTwo = paginateItems(items, { page: 2, pageSize: DEFAULT_PAGE_SIZE });

    expect(pageOne).toHaveLength(12);
    expect(pageOne[0]).toBe(1);
    expect(pageTwo).toHaveLength(6);
    expect(pageTwo[0]).toBe(13);
  });
});
