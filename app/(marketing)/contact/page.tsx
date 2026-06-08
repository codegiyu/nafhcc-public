import { ContactPageContent } from '@/components/marketing/contact/contact-page-content';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Contact NAFHCC for housing applications, estate information, partnerships, and general enquiries. Our team responds within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactPageContent />;
}
