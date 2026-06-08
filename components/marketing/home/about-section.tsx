import Image from 'next/image';
import { SectionHeader } from '@/components/marketing/overline-badge';
import { SiteSection } from '@/components/layout/site-section';
import type { HomepageContent } from '@/lib/content/homepage';

type AboutSectionProps = {
  content: HomepageContent['about'];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <SiteSection id="about" className="bg-section-muted py-20 md:py-24">
      <div className="mx-auto grid max-w-container-wide items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          overline={content.overline}
          title={content.title}
          description={content.description}
          id="about-heading"
        />
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-card">
          <Image
            src={content.imageUrl}
            alt={content.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </SiteSection>
  );
}
