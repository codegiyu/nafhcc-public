'use client';

import { useSearchParams } from 'next/navigation';
import { PropertyResultCard } from '@/components/marketing/cards/property-result-card';
import { SearchBar } from '@/components/marketing/search-bar';
import { SearchResultsPagination } from '@/components/marketing/search/search-results-pagination';
import { SearchResultsToolbar } from '@/components/marketing/search/search-results-toolbar';
import { SiteSection } from '@/components/layout/site-section';
import { generatePropertySearchResults } from '@/lib/demo/generate-property-search-results';
import { getHomepageContent } from '@/lib/content/homepage';
import { DEFAULT_PAGE_SIZE, getPaginationMeta, paginateItems } from '@/lib/search/pagination';
import { parseSearchParams } from '@/lib/search/search-params';

function buildResultsHeading(filters: ReturnType<typeof parseSearchParams>): string {
  const parts = [filters.location, filters.type, filters.price].filter(Boolean);

  if (parts.length === 0) {
    return 'All available properties';
  }

  return parts.join(' · ');
}

export function SearchResultsContent() {
  const searchParams = useSearchParams();
  const content = getHomepageContent();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const filters = parseSearchParams(paramsObject, content.search);
  const { location, type, price, page } = filters;
  const results = generatePropertySearchResults({ location, type, price });
  const meta = getPaginationMeta({
    total: results.length,
    page,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const visibleResults = paginateItems(results, { page: meta.page, pageSize: meta.pageSize });
  const pagination = <SearchResultsPagination meta={meta} filters={filters} action="/search" />;

  return (
    <SiteSection className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-container-wide space-y-8 px-6">
        <div className="space-y-3">
          <h1 className="text-h2 text-foreground">Search Properties</h1>
          <p className="text-body-lg text-muted-foreground">{buildResultsHeading(filters)}</p>
        </div>

        <SearchBar
          key={`${location ?? ''}-${type ?? ''}-${price ?? ''}`}
          options={content.search}
          defaultValues={filters}
          action="/search"
        />

        <SearchResultsToolbar meta={meta} pagination={pagination} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleResults.map(result => (
            <PropertyResultCard key={result.id} {...result} />
          ))}
        </div>

        <SearchResultsToolbar meta={meta} pagination={pagination} />
      </div>
    </SiteSection>
  );
}
