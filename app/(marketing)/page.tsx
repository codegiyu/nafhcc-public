import { HomePageContent } from '@/components/marketing/home/home-page-content';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Quality Housing Estates Across Nigeria',
  description:
    'Explore NAFHCC residential estates, plots, and homes for the Nigerian Air Force community. Trusted housing delivery across Abuja and Nigeria.',
  path: '/',
});

export default function HomePage() {
  return <HomePageContent />;
}
