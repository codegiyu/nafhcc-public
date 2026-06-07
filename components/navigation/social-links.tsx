import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/navigation/social-icons';

const socialItems = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
] as const;

type SocialLinksProps = {
  variant?: 'utility' | 'footer';
  className?: string;
};

export function SocialLinks({ variant = 'utility', className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socialItems.map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2',
              variant === 'utility'
                ? 'text-white/80 hover:text-white focus-visible:ring-white/50'
                : 'text-white/70 hover:text-white focus-visible:ring-white/50'
            )}>
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
