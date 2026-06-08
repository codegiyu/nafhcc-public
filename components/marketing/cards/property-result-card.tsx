import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { PropertySearchResult } from '@/lib/demo/generate-property-search-results';

type PropertyResultCardProps = PropertySearchResult & {
  className?: string;
};

export function PropertyResultCard({
  title,
  location,
  priceLabel,
  imageUrl,
  imageAlt,
  className,
}: PropertyResultCardProps) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-floating',
        className
      )}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
        />
        <Badge variant="status" className="absolute left-3 top-3">
          For Sale
        </Badge>
      </div>
      <div className="flex min-h-28 flex-col justify-between p-5">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {location}
          </p>
        </div>
        <p className="text-base font-semibold text-primary">{priceLabel}</p>
      </div>
    </article>
  );
}
