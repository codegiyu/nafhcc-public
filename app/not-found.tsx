import { MarketingSiteChrome } from '@/components/layout/marketing-site-chrome';
import { SiteContainer } from '@/components/layout/site-container';
import { ButtonLink } from '@/components/ui/button-link';
import { createNotFoundMetadata } from '@/lib/seo/metadata';

export const metadata = createNotFoundMetadata();

export default function NotFoundPage() {
  return (
    <MarketingSiteChrome>
      <SiteContainer className="flex flex-col items-start justify-center py-20">
        <h1 className="text-3xl font-bold text-primary">Page not found</h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <ButtonLink href="/" className="mt-8">
          Return home
        </ButtonLink>
      </SiteContainer>
    </MarketingSiteChrome>
  );
}
