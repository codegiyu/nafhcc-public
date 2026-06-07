'use client';

import { useEffect } from 'react';
import { MarketingSiteChrome } from '@/components/layout/marketing-site-chrome';
import { SiteContainer } from '@/components/layout/site-container';
import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/button-link';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MarketingSiteChrome>
      <SiteContainer className="flex flex-col items-start justify-center py-20">
        <h1 className="text-3xl font-bold text-primary">Something went wrong</h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex gap-4">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <ButtonLink href="/" variant="outline">
            Return home
          </ButtonLink>
        </div>
      </SiteContainer>
    </MarketingSiteChrome>
  );
}
