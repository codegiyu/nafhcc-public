import { ReactNode } from 'react';
import { SkipLink } from '@/components/layout/skip-link';
import { SiteMain } from '@/components/layout/site-main';
import { MarketingSiteHeader } from '@/components/layout/marketing-site-header';
import { SiteFooter } from '@/components/layout/site-footer';

type MarketingSiteChromeProps = {
  children: ReactNode;
};

export function MarketingSiteChrome({ children }: MarketingSiteChromeProps) {
  return (
    <>
      <SkipLink />
      <MarketingSiteHeader />
      <SiteMain>{children}</SiteMain>
      <SiteFooter />
    </>
  );
}
