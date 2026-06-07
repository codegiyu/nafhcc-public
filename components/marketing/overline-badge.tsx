import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type OverlineBadgeProps = {
  children: ReactNode;
  variant?: 'overline' | 'secondary' | 'default';
  className?: string;
};

export function OverlineBadge({ children, variant = 'secondary', className }: OverlineBadgeProps) {
  return (
    <Badge variant={variant} className={cn('px-3 py-1', className)}>
      {children}
    </Badge>
  );
}

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: { label: string; href: string };
  align?: 'left' | 'center';
  id?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  action,
  align = 'left',
  id,
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        isCenter && 'items-center text-center',
        !isCenter && action && 'md:flex-row md:items-end md:justify-between',
        className
      )}>
      <div className={cn('space-y-2', isCenter && 'max-w-2xl')}>
        <h2 id={id} className="text-h2 text-foreground">
          {title}
        </h2>
        {description ? <p className="text-body-lg text-muted-foreground">{description}</p> : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
