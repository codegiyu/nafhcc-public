import { Suspense } from 'react';
import { SearchResultsContent } from '@/components/marketing/search/search-results-content';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Search Properties',
  description:
    'Search NAFHCC residential plots, houses, duplexes, and bungalows across Abuja and Nigeria.',
  path: '/search',
});

function SearchResultsFallback() {
  return (
    <div className="mx-auto max-w-container-wide px-6 py-16">
      <p className="text-body-lg text-muted-foreground">Loading search results…</p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchResultsFallback />}>
      <SearchResultsContent />
    </Suspense>
  );
}
