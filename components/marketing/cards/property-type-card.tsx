import Image from 'next/image';
import { cn } from '@/lib/utils';

type PropertyTypeCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
};

export function PropertyTypeCard({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  className,
}: PropertyTypeCardProps) {
  return (
    <article
      className={cn(
        'group relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-card transition-shadow hover:shadow-floating',
        className
      )}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/85">{subtitle}</p>
      </div>
    </article>
  );
}
