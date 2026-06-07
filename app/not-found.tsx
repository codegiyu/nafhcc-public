import Link from 'next/link';
import { SiteContainer } from '@/components/layout/site-container';
import { createNotFoundMetadata } from '@/lib/seo/metadata';

export const metadata = createNotFoundMetadata();

export default function NotFoundPage() {
  return (
    <SiteContainer className="flex min-h-screen flex-col items-start justify-center py-20">
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring">
        Return home
      </Link>
    </SiteContainer>
  );
}
