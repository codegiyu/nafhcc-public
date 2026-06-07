import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { TextActionLink } from '@/components/marketing/text-action-link';

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
  overline?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string; showArrow?: boolean };
  align?: 'left' | 'center';
  id?: string;
  className?: string;
};

export function SectionHeader({
  overline,
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
        {overline ? <p className="text-caption text-primary">{overline}</p> : null}
        <h2 id={id} className="text-h2 text-foreground">
          {title}
        </h2>
        {description ? <p className="text-body-lg text-muted-foreground">{description}</p> : null}
      </div>
      {action ? (
        <TextActionLink href={action.href} showArrow={action.showArrow ?? true}>
          {action.label}
        </TextActionLink>
      ) : null}
    </div>
  );
}
