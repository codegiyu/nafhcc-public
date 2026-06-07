import { ReactNode } from 'react';
import { SkipLink } from '@/components/layout/skip-link';
import { SiteMain } from '@/components/layout/site-main';

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SkipLink />
      <SiteMain>{children}</SiteMain>
    </>
  );
}
