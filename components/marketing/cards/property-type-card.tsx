import { Building2, Home, Layers, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StyleguidePropertyType } from '@/lib/fixtures/styleguide-mocks';

const iconMap: Record<StyleguidePropertyType['icon'], LucideIcon> = {
  home: Home,
  building: Building2,
  layers: Layers,
};

type PropertyTypeCardProps = StyleguidePropertyType & {
  className?: string;
};

export function PropertyTypeCard({ title, subtitle, icon, className }: PropertyTypeCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        'flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card',
        className
      )}>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </article>
  );
}
