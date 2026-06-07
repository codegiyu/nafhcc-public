import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CtaBandProps = {
  title: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
};

export function CtaBand({ title, primaryAction, secondaryAction, className }: CtaBandProps) {
  return (
    <section
      className={cn('bg-primary px-6 py-12 text-primary-foreground md:py-16', className)}
      aria-labelledby="cta-band-title">
      <div className="mx-auto flex max-w-container-wide flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 id="cta-band-title" className="text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="inverse" size="lg" render={<Link href={primaryAction.href} />}>
            {primaryAction.label}
          </Button>
          {secondaryAction ? (
            <Button variant="hero-outline" size="lg" render={<Link href={secondaryAction.href} />}>
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
