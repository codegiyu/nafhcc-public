import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({ children, className }: SiteContainerProps) {
  return <div className={cn('mx-auto w-full max-w-5xl px-6', className)}>{children}</div>;
}
