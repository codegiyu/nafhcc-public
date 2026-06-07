import { ReactNode } from 'react';
import Image from 'next/image';
import { OverlineBadge } from '@/components/marketing/overline-badge';
import { ButtonLink } from '@/components/ui/button-link';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  overline: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  imageUrl: string;
  imageAlt: string;
  statsSlot?: ReactNode;
  className?: string;
};

export function HeroSection({
  overline,
  title,
  description,
  primaryAction,
  secondaryAction,
  imageUrl,
  imageAlt,
  statsSlot,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn('relative', className)}>
      <div className="relative min-h-[min(85vh,50rem)]">
        <Image src={imageUrl} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[min(85vh,50rem)] max-w-container-wide flex-col justify-center px-6 py-20 md:py-28">
          <OverlineBadge variant="overline">{overline}</OverlineBadge>
          <h1 className="mt-4 max-w-3xl text-hero text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-white/90">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryAction.href} size="xl">
              {primaryAction.label}
            </ButtonLink>
            <ButtonLink href={secondaryAction.href} variant="hero-outline" size="xl">
              {secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
      </div>
      {statsSlot ? (
        <div className="relative z-10 mx-auto max-w-container-wide px-6 -mt-12 md:-mt-16">
          {statsSlot}
        </div>
      ) : null}
    </section>
  );
}
