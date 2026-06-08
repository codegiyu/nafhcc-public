import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { formatResultsSummary, type PaginationMeta } from '@/lib/search/pagination';

type SearchResultsToolbarProps = {
  meta: PaginationMeta;
  pagination: ReactNode;
  className?: string;
};

export function SearchResultsToolbar({ meta, pagination, className }: SearchResultsToolbarProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
        className
      )}>
      <p className="text-sm text-muted-foreground">{formatResultsSummary(meta)}</p>
      {pagination}
    </div>
  );
}
