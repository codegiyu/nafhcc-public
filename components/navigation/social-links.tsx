import Link from 'next/link';
import { cn } from '@/lib/utils';

const socialItems = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;

type SocialLinksProps = {
  variant?: 'utility' | 'footer';
  className?: string;
};

export function SocialLinks({ variant = 'utility', className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socialItems.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'inline-flex size-8 items-center justify-center rounded-md text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2',
              variant === 'utility'
                ? 'text-white/80 hover:text-white focus-visible:ring-white/50'
                : 'text-white/70 hover:text-white focus-visible:ring-white/50'
            )}>
            {label.slice(0, 1)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
