import Image from 'next/image';
import { Award, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import { SiteSection } from '@/components/layout/site-section';
import { ButtonLinkWithArrow } from '@/components/ui/button-link-with-arrow';
import type { HomepageAboutHighlight, HomepageContent, HomepageStat } from '@/lib/content/homepage';

const highlightIconMap: Record<HomepageAboutHighlight['icon'], LucideIcon> = {
  shield: ShieldCheck,
  award: Award,
  users: Users,
};

type AboutSectionProps = {
  content: HomepageContent['about'];
  stats: HomepageStat[];
};

function AboutHighlight({ icon, label }: HomepageAboutHighlight) {
  const Icon = highlightIconMap[icon];

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <p className="text-sm font-medium text-foreground">{label}</p>
    </div>
  );
}

export function AboutSection({ content, stats }: AboutSectionProps) {
  const featuredStat = stats[0];

  return (
    <SiteSection id="about" className="bg-section-muted py-20 md:py-24">
      <div className="mx-auto grid max-w-container-wide items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative pb-8 lg:pb-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-card">
            <Image
              src={content.imageUrl}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {featuredStat ? (
            <div className="absolute -bottom-2 right-4 rounded-xl border border-border bg-card px-5 py-4 shadow-floating sm:right-6">
              <p className="text-3xl font-bold text-primary">{featuredStat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{featuredStat.label}</p>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          {content.overline ? (
            <p className="text-caption text-primary">{content.overline}</p>
          ) : null}
          <h2 id="about-heading" className="text-h2 text-foreground">
            {content.title}
          </h2>
          <div className="space-y-4">
            {content.paragraphs.map(paragraph => (
              <p key={paragraph} className="text-body-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {content.highlights.map(highlight => (
              <AboutHighlight key={highlight.label} {...highlight} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLinkWithArrow
              href={content.primaryAction.href}
              size="lg"
              showArrow={content.primaryAction.showArrow ?? true}>
              {content.primaryAction.label}
            </ButtonLinkWithArrow>
            <ButtonLinkWithArrow
              href={content.secondaryAction.href}
              variant="outline"
              size="lg"
              showArrow={content.secondaryAction.showArrow ?? false}>
              {content.secondaryAction.label}
            </ButtonLinkWithArrow>
          </div>
        </div>
      </div>
    </SiteSection>
  );
}
