import { ReactNode } from 'react';
import './globals.css';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { WebVitalsReporter } from '@/components/analytics/web-vitals-reporter';
import { JsonLd } from '@/components/seo/json-ld';
import { createRootMetadata } from '@/lib/seo/metadata';
import { Toaster } from '@/components/ui/sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = createRootMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)} suppressHydrationWarning>
      <body>
        <JsonLd />
        <Providers>
          {children}
          <WebVitalsReporter />
          <AnalyticsProvider />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
