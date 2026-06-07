import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SiteSectionProps = {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  ariaLabel?: string;
};

export function SiteSection({ children, className, labelledBy, ariaLabel }: SiteSectionProps) {
  return (
    <section className={cn(className)} aria-labelledby={labelledBy} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
