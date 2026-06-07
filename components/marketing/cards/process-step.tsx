import { cn } from '@/lib/utils';
import type { StyleguideProcessStep } from '@/lib/fixtures/styleguide-mocks';

type ProcessStepProps = StyleguideProcessStep & {
  className?: string;
};

export function ProcessStep({ step, title, description, className }: ProcessStepProps) {
  return (
    <article className={cn('text-center', className)}>
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {step}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
