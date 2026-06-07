import { SiteContainer } from '@/components/layout/site-container';
import { SiteSection } from '@/components/layout/site-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-5 bg-primary" />
      <SiteSection>
        <SiteContainer className="py-20">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Public App
          </span>
          <h1 className="mt-6 text-4xl font-bold text-primary md:text-5xl">NAFHCC Public</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Public website bootstrap complete.
          </p>
        </SiteContainer>
      </SiteSection>
    </div>
  );
}
