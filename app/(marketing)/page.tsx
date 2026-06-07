import Image from 'next/image';
import { SiteContainer } from '@/components/layout/site-container';
import { SiteSection } from '@/components/layout/site-section';
import { createPageMetadata } from '@/lib/seo/metadata';
import { getSiteImages } from '@/lib/seo/site-images';

export const metadata = createPageMetadata({
  title: 'Quality Housing Estates Across Nigeria',
  description:
    'Explore NAFHCC residential estates, plots, and homes for the Nigerian Air Force community. Trusted housing delivery across Abuja and Nigeria.',
  path: '/',
});

export default function HomePage() {
  const images = getSiteImages();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-5 bg-primary" />
      <SiteSection>
        <SiteContainer className="py-20">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Nigerian Air Force Housing
          </span>
          <h1 className="mt-6 text-4xl font-bold text-primary md:text-5xl">
            Quality Housing Estates Across Nigeria
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            NAFHCC delivers trusted residential estates, plots, and homes for the Nigerian Air Force
            community.
          </p>
          <div className="relative mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl">
            <Image
              src={images.hero.url}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </SiteContainer>
      </SiteSection>
    </div>
  );
}
