import { agentSlugs, estateSlugs } from './estate-slugs';
import { isKnownRoutePath } from './route-registry';
export type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const staticRedirects: RedirectRule[] = [
  { source: '/homepage', destination: '/', permanent: true },
  { source: '/project-cat/projects', destination: '/estates', permanent: true },
];

export const estateRedirects: RedirectRule[] = estateSlugs.map(slug => ({
  source: `/project/${slug}`,
  destination: `/estates/${slug}`,
  permanent: true,
}));

export const agentRedirects: RedirectRule[] = agentSlugs.map(slug => ({
  source: `/team/${slug}`,
  destination: `/agents/${slug}`,
  permanent: true,
}));

export const redirectRules: RedirectRule[] = [
  ...staticRedirects,
  ...estateRedirects,
  ...agentRedirects,
];

export function validateRedirectRules(rules: RedirectRule[]): string[] {
  const errors: string[] = [];
  const destinations = new Map<string, string>();

  for (const rule of rules) {
    if (rule.source === rule.destination) {
      errors.push(`Self-loop redirect: ${rule.source}`);
    }

    const chained = destinations.get(rule.destination);
    if (chained) {
      errors.push(`Redirect chain detected: ${rule.source} -> ${rule.destination} -> ${chained}`);
    }

    destinations.set(rule.source, rule.destination);

    if (!isKnownRoutePath(rule.destination) && rule.destination !== '/') {
      errors.push(`Unknown destination path: ${rule.destination}`);
    }
  }

  return errors;
}

export function toNextRedirects(rules: RedirectRule[]) {
  return rules.map(rule => ({
    source: rule.source,
    destination: rule.destination,
    permanent: rule.permanent,
  }));
}
