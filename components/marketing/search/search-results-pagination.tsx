import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { ButtonLink } from '@/components/ui/button-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { buildSearchHref, type SearchFilters } from '@/lib/search/search-params';
import type { PaginationMeta } from '@/lib/search/pagination';

type SearchResultsPaginationProps = {
  meta: PaginationMeta;
  filters: SearchFilters;
  action?: string;
  className?: string;
};

function DisabledPageControl({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span
      aria-disabled="true"
      aria-label={label}
      className={cn(
        buttonVariants({ variant: 'outline', size: 'icon-sm' }),
        'pointer-events-none opacity-50'
      )}>
      {children}
    </span>
  );
}

export function SearchResultsPagination({
  meta,
  filters,
  action = '/search',
  className,
}: SearchResultsPaginationProps) {
  if (meta.pageCount <= 1) {
    return null;
  }

  const pages = Array.from({ length: meta.pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)}>
      {meta.page <= 1 ? (
        <DisabledPageControl label="Previous page">
          <ChevronLeft aria-hidden />
        </DisabledPageControl>
      ) : (
        <ButtonLink
          href={buildSearchHref(action, { ...filters, page: meta.page - 1 })}
          variant="outline"
          size="icon-sm"
          aria-label="Previous page">
          <ChevronLeft aria-hidden />
        </ButtonLink>
      )}

      {pages.map(pageNumber => (
        <ButtonLink
          key={pageNumber}
          href={buildSearchHref(action, { ...filters, page: pageNumber })}
          variant={pageNumber === meta.page ? 'default' : 'outline'}
          size="icon-sm"
          aria-current={pageNumber === meta.page ? 'page' : undefined}>
          {pageNumber}
        </ButtonLink>
      ))}

      {meta.page >= meta.pageCount ? (
        <DisabledPageControl label="Next page">
          <ChevronRight aria-hidden />
        </DisabledPageControl>
      ) : (
        <ButtonLink
          href={buildSearchHref(action, { ...filters, page: meta.page + 1 })}
          variant="outline"
          size="icon-sm"
          aria-label="Next page">
          <ChevronRight aria-hidden />
        </ButtonLink>
      )}
    </nav>
  );
}
