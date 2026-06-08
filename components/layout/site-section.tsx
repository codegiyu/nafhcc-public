import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SiteSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
};

export function SiteSection({ children, className, id, labelledBy, ariaLabel }: SiteSectionProps) {
  return (
    <section
      id={id}
      className={cn('overflow-hidden', className)}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}>
      {children}
    </section>
  );
}
