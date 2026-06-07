import { ReactNode } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FooterLink } from '@/components/navigation/utility-bar';
import { SocialLinks } from '@/components/navigation/social-links';
import { styleguideContact, styleguideEstates } from '@/lib/fixtures/styleguide-mocks';
import { footerQuickLinks } from '@/lib/site-navigation';
import { cn } from '@/lib/utils';

type SiteFooterProps = {
  className?: string;
};

export function SiteFooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn('bg-navy text-white', className)}>
      <div className="mx-auto grid max-w-container-wide gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold">NAFHCC</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Nigerian Air Force Housing and Construction Company — delivering quality housing estates
            across Nigeria for the NAF community.
          </p>
        </div>
        <SiteFooterColumn title="Quick Links">
          {footerQuickLinks.map(link => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </SiteFooterColumn>
        <SiteFooterColumn title="Contact">
          <p className="flex items-start gap-2 text-sm text-white/75">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
            {styleguideContact.address}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/75">
            <Phone className="size-4 shrink-0" aria-hidden />
            <a href={`tel:${styleguideContact.phone}`} className="hover:text-white">
              {styleguideContact.phone}
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm text-white/75">
            <Mail className="size-4 shrink-0" aria-hidden />
            <a href={`mailto:${styleguideContact.email}`} className="hover:text-white">
              {styleguideContact.email}
            </a>
          </p>
        </SiteFooterColumn>
        <SiteFooterColumn title="Featured Estates">
          {styleguideEstates.map(estate => (
            <FooterLink key={estate.href} href={estate.href}>
              {estate.title}
            </FooterLink>
          ))}
        </SiteFooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container-wide flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} NAFHCC. All rights reserved.</p>
          <SocialLinks variant="footer" />
        </div>
      </div>
    </footer>
  );
}
