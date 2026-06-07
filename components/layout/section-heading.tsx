import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  children: ReactNode;
  id: string;
  level?: 2 | 3 | 4;
  className?: string;
};

export function SectionHeading({ children, id, level = 2, className }: SectionHeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag id={id} className={cn('text-2xl font-semibold text-foreground', className)}>
      {children}
    </Tag>
  );
}
