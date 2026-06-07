import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { siteContact } from '@/lib/content/contact';
import { SocialLinks } from '@/components/navigation/social-links';

type UtilityBarProps = {
  className?: string;
};

export function UtilityBar({ className }: UtilityBarProps) {
  return (
    <div className={cn('bg-navy text-sm text-white/90', className)}>
      <div className="mx-auto flex max-w-container-wide flex-wrap items-center justify-between gap-3 px-6 py-2">
        <div className="flex flex-wrap items-center gap-4">
          <a href={`tel:${siteContact.phone}`} className="hover:text-white">
            {siteContact.phone}
          </a>
          <a href={`mailto:${siteContact.email}`} className="hover:text-white">
            {siteContact.email}
          </a>
        </div>
        <SocialLinks variant="utility" />
      </div>
    </div>
  );
}

type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  className?: string;
};

export function NavLink({ href, children, isActive, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary',
        className
      )}>
      {children}
    </Link>
  );
}

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
        className
      )}>
      {children}
    </Link>
  );
}
