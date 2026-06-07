import { cn } from '@/lib/utils';
import type { StyleguideStat } from '@/lib/fixtures/styleguide-mocks';

type StatsBarProps = {
  stats: StyleguideStat[];
  className?: string;
};

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card px-6 py-8 shadow-floating md:px-10',
        className
      )}>
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="mt-1 text-3xl font-bold text-primary md:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
