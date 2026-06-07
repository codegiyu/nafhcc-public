import { ReactNode } from 'react';
import { MarketingSiteChrome } from '@/components/layout/marketing-site-chrome';

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingSiteChrome>{children}</MarketingSiteChrome>;
}
