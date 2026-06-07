import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button-link';
import { NavLink, UtilityBar } from '@/components/navigation/utility-bar';
import { cn } from '@/lib/utils';

export type HeaderNavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navigation: HeaderNavItem[];
  activePath?: string;
  className?: string;
};

export function SiteHeader({ navigation, activePath = '/', className }: SiteHeaderProps) {
  return (
    <>
      <UtilityBar />
      <header className={cn('sticky top-0 z-40', className)}>
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto flex max-w-container-wide items-center justify-between gap-4 px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              NAFHCC
            </Link>
            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {navigation.map(item => (
                <NavLink key={item.href} href={item.href} isActive={activePath === item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <ButtonLink href="/contact" size="lg">
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </header>
    </>
  );
}
