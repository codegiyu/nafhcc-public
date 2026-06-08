import { ButtonLinkWithArrow } from '@/components/ui/button-link-with-arrow';
import { cn } from '@/lib/utils';

type CtaAction = {
  label: string;
  href: string;
  showArrow?: boolean;
};

type CtaBandProps = {
  title: string;
  description?: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  className?: string;
};

export function CtaBand({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CtaBandProps) {
  return (
    <section
      className={cn('bg-primary px-6 py-12 text-primary-foreground md:py-16', className)}
      aria-labelledby="cta-band-title">
      <div className="mx-auto flex max-w-container-wide flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-3">
          <h2 id="cta-band-title" className="text-2xl font-bold md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-base text-primary-foreground/90 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLinkWithArrow
            href={primaryAction.href}
            variant="inverse"
            size="lg"
            showArrow={primaryAction.showArrow ?? true}>
            {primaryAction.label}
          </ButtonLinkWithArrow>
          {secondaryAction ? (
            <ButtonLinkWithArrow
              href={secondaryAction.href}
              variant="secondary"
              size="lg"
              showArrow={secondaryAction.showArrow ?? false}>
              {secondaryAction.label}
            </ButtonLinkWithArrow>
          ) : null}
        </div>
      </div>
    </section>
  );
}
