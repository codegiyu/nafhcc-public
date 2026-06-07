import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SiteMainProps = {
  children: ReactNode;
  className?: string;
};

export function SiteMain({ children, className }: SiteMainProps) {
  return (
    <main id="main-content" tabIndex={-1} className={cn('outline-none', className)}>
      {children}
    </main>
  );
}
