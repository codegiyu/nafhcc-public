import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchResultsContent } from '@/components/marketing/search/search-results-content';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams('location=Abuja&page=1'),
}));

describe('SearchResultsContent', () => {
  it('renders search summary, toolbar, and first page of cards', () => {
    render(<SearchResultsContent />);

    expect(screen.getByRole('heading', { name: 'Search Properties' })).toBeInTheDocument();
    expect(screen.getAllByText('Showing 1 to 12 of 18 results')).toHaveLength(2);
    expect(screen.getAllByRole('navigation', { name: 'Pagination' })).toHaveLength(2);
    expect(screen.getAllByRole('article')).toHaveLength(12);
  });
});
