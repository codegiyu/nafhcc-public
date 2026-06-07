import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type StyleguideSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function StyleguideSection({
  id,
  title,
  description,
  children,
  className,
}: StyleguideSectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 border-b border-border pb-16 last:border-b-0', className)}>
      <header className="mb-8">
        <h2 className="text-h2 text-foreground">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-body-lg text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

export function StyleguidePreviewBox({
  label,
  children,
  className,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-border bg-card/50', className)}>
      {label ? (
        <div className="border-b border-border bg-muted/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
      ) : null}
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
