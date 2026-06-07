import { siteConfig } from '@/lib/seo/site-config';
import { getSiteImages } from '@/lib/seo/site-images';

export function buildOrganizationSchema() {
  const images = getSiteImages();

  return {
    '@type': 'Organization',
    '@id': '#organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: images.logo.url,
      width: images.logo.width,
      height: images.logo.height,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: ['en'],
    },
    sameAs: siteConfig.social.sameAs,
  };
}

export function buildLocalBusinessSchema() {
  const images = getSiteImages();

  return {
    '@type': 'RealEstateAgent',
    '@id': '#localbusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    image: [images.ogDefault.url],
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Abuja',
      addressCountry: 'NG',
    },
  };
}
