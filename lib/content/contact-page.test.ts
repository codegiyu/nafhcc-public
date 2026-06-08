import { describe, expect, it } from 'vitest';
import {
  getContactPageContent,
  siteContact,
  validateContactPageContent,
} from '@/lib/content/contact';

describe('contact page content', () => {
  it('passes structural validation', () => {
    const content = getContactPageContent();
    expect(validateContactPageContent(content)).toEqual([]);
  });

  it('includes hero, info cards, form section, and subject options', () => {
    const content = getContactPageContent();

    expect(content.hero.overline).toBe('CONTACT US');
    expect(content.infoCards).toHaveLength(4);
    expect(content.formSection.overline).toBe('SEND A MESSAGE');
    expect(content.formSection.title).toContain('conversation');
    expect(content.subjectOptions).toContain('Housing Application Inquiry');
  });

  it('uses legacy site contact values in cards and quick contacts', () => {
    const content = getContactPageContent();

    expect(content.infoCards[0].lines[0]).toContain(siteContact.address);
    expect(content.infoCards[1].lines[0]).toBe(siteContact.phone);
    expect(content.infoCards[2].lines[0]).toBe(siteContact.email);
    expect(content.formSection.quickContacts[0].label).toBe(siteContact.phone);
  });
});
