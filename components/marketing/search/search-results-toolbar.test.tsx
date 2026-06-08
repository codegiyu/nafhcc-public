import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SearchResultsToolbar } from '@/components/marketing/search/search-results-toolbar';
import { getPaginationMeta } from '@/lib/search/pagination';

describe('SearchResultsToolbar', () => {
  it('renders the results summary copy', () => {
    const meta = getPaginationMeta({ total: 18, page: 1, pageSize: 12 });

    render(
      <SearchResultsToolbar meta={meta} pagination={<nav aria-label="Pagination">Pages</nav>} />
    );

    expect(screen.getByText('Showing 1 to 12 of 18 results')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
  });
});
