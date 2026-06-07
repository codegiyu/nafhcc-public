'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { SiteContainer } from '@/components/layout/site-container';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SiteContainer className="flex min-h-screen flex-col items-start justify-center py-20">
      <h1 className="text-3xl font-bold text-primary">Something went wrong</h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring">
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-ring">
          Return home
        </Link>
      </div>
    </SiteContainer>
  );
}
