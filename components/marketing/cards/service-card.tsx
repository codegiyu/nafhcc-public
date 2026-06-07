import { Building2, Home, KeyRound, ShieldCheck, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StyleguideService } from '@/lib/fixtures/styleguide-mocks';

const iconMap: Record<StyleguideService['icon'], LucideIcon> = {
  building: Building2,
  home: Home,
  key: KeyRound,
  shield: ShieldCheck,
};

type ServiceCardProps = StyleguideService & {
  className?: string;
};

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-floating',
        className
      )}>
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
