import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { StyleguideEstate } from '@/lib/fixtures/styleguide-mocks';

type EstateCardProps = StyleguideEstate & {
  className?: string;
};

export function EstateCard({
  title,
  location,
  href,
  imageUrl,
  imageAlt,
  badge,
  className,
}: EstateCardProps) {
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge ? (
          <Badge variant="status" className="absolute left-3 top-3">
            {badge}
          </Badge>
        ) : null}
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-foreground">
          <Link
            href={href}
            className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {title}
          </Link>
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden />
          {location}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          View Details
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
