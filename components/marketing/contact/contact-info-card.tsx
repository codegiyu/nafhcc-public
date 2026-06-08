import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import type { ContactInfoCard } from '@/lib/content/contact';
import { cn } from '@/lib/utils';

const iconMap: Record<ContactInfoCard['icon'], LucideIcon> = {
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
};

type ContactInfoCardProps = ContactInfoCard & {
  className?: string;
};

export function ContactInfoCard({ icon, title, lines, className }: ContactInfoCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className={cn('rounded-xl border border-border bg-card p-6 shadow-card', className)}>
      <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-1">
        {lines.map(line => (
          <p key={line} className="text-sm leading-relaxed text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
}
