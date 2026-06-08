import { ReactNode } from 'react';
import Image from 'next/image';
import { OverlineBadge } from '@/components/marketing/overline-badge';
import { ButtonLinkWithArrow } from '@/components/ui/button-link-with-arrow';
import { cn } from '@/lib/utils';

type HeroAction = {
  label: string;
  href: string;
  showArrow?: boolean;
};

type HeroSectionProps = {
  overline: string;
  title: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  imageUrl: string;
  imageAlt: string;
  statsSlot?: ReactNode;
  size?: 'full' | 'compact';
  align?: 'left' | 'center';
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
  size = 'full',
  align = 'left',
  className,
}: HeroSectionProps) {
  const isCompact = size === 'compact';
  const isCentered = align === 'center';
  const minHeightClass = isCompact ? 'min-h-[min(42vh,22rem)]' : 'min-h-[min(85vh,50rem)]';
  const paddingClass = isCompact ? 'py-14 md:py-16' : 'py-20 md:py-28';
  const showActions = primaryAction && secondaryAction;

  return (
    <section className={cn('relative', className)}>
      <div className={cn('relative', minHeightClass)}>
        <Image src={imageUrl} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div
          className={cn(
            'relative mx-auto flex max-w-container-wide flex-col justify-center px-6',
            minHeightClass,
            paddingClass,
            isCentered && 'items-center text-center'
          )}>
          <OverlineBadge variant="overline">{overline}</OverlineBadge>
          <h1 className={cn('mt-4 text-hero text-white', isCentered ? 'max-w-4xl' : 'max-w-3xl')}>
            {title}
          </h1>
          <p
            className={cn(
              'mt-4 text-body-lg text-white/90',
              isCentered ? 'max-w-3xl' : 'max-w-2xl'
            )}>
            {description}
          </p>
          {showActions ? (
            <div className={cn('mt-8 flex flex-wrap gap-3', isCentered && 'justify-center')}>
              <ButtonLinkWithArrow
                href={primaryAction.href}
                size="xl"
                showArrow={primaryAction.showArrow ?? true}>
                {primaryAction.label}
              </ButtonLinkWithArrow>
              <ButtonLinkWithArrow
                href={secondaryAction.href}
                variant="secondary"
                size="xl"
                showArrow={secondaryAction.showArrow ?? false}>
                {secondaryAction.label}
              </ButtonLinkWithArrow>
            </div>
          ) : null}
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
