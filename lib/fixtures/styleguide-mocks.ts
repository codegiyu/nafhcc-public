import { siteContact } from '@/lib/content/contact';
import { getHomepageContent } from '@/lib/content/homepage';

export type StyleguideStat = {
  value: string;
  label: string;
};

export type StyleguideEstate = {
  title: string;
  location: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

export type StyleguideService = {
  title: string;
  description: string;
  icon: 'building' | 'home' | 'key' | 'shield';
};

export type StyleguideProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type StyleguidePropertyType = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
};

const homepage = getHomepageContent();

export const styleguideStats = homepage.stats;
export const styleguideEstates = homepage.estates.items;
export const styleguideServices = homepage.services.items;
export const styleguideProcessSteps = homepage.process.items;
export const styleguidePropertyTypes = homepage.propertyTypes.items;
export const styleguideSearchOptions = homepage.search;
export const styleguideContact = siteContact;
