'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/button-link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavLink, UtilityBar } from '@/components/navigation/utility-bar';
import { primaryNavigation } from '@/lib/site-navigation';

function isNavItemActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  if (href.startsWith('/#')) {
    return pathname === '/';
  }

  const basePath = href.split('#')[0] ?? href;
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

export function MarketingSiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <UtilityBar />
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-container-wide items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            NAFHCC
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNavigation.map(item => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={isNavItemActive(pathname, item.href)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" size="lg" className="hidden sm:inline-flex">
              Apply Now
            </ButtonLink>

            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  />
                }>
                <Menu aria-hidden />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-4">
                  {primaryNavigation.map(item => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      isActive={isNavItemActive(pathname, item.href)}
                      className="block py-3">
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="px-4 pb-4">
                  <ButtonLink href="/contact" size="lg" className="w-full">
                    Apply Now
                  </ButtonLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
