import { getSiteImages } from '@/lib/seo/site-images';

export const siteConfig = {
  name: 'Nigerian Air Force Housing and Construction Company Ltd',
  shortName: 'NAFHCC',
  description:
    'Nigerian Air Force Housing and Construction Company delivers quality residential estates, plots, and homes across Abuja and Nigeria.',
  locale: 'en_NG',
  language: 'en',
  category: 'Real Estate',
  contact: {
    phone: '09087069086',
    email: 'info@nafhcc.com',
    address: '156 Aminu Kano Crescent, Wuse II, Abuja',
  },
  geo: {
    region: 'NG-FC',
    placename: 'Abuja',
  },
  social: {
    sameAs: [] as string[],
  },
  titleTemplate: '%s | NAFHCC',
  get url() {
    return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  },
  get images() {
    return getSiteImages();
  },
} as const;
