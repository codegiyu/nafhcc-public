export const brandColors = {
  primary: '#286da4',
  primaryHover: '#1f5a8a',
  navy: '#152a45',
  secondary: '#decfa5',
  sectionMuted: '#f1f5f9',
  background: '#fafbfb',
  foreground: '#0f172a',
  mutedForeground: '#64748b',
  heroOverlay: 'rgba(21, 42, 69, 0.72)',
} as const;

export const designRadii = {
  button: '0.5rem',
  card: '0.75rem',
  pill: '9999px',
} as const;

export const designShadows = {
  card: '0 4px 24px rgba(15, 23, 42, 0.08)',
  floating: '0 8px 32px rgba(15, 23, 42, 0.12)',
} as const;

export const designLayout = {
  container: '72rem',
  containerWide: '80rem',
  sectionY: '4rem',
} as const;

export const designTypography = {
  hero: 'text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl',
  h2: 'text-2xl font-bold tracking-tight md:text-3xl',
  h3: 'text-lg font-semibold',
  body: 'text-base leading-relaxed',
  bodyLg: 'text-lg leading-relaxed',
  caption: 'text-xs font-medium uppercase tracking-wider',
  statValue: 'text-3xl font-bold text-primary md:text-4xl',
  statLabel: 'text-sm text-muted-foreground',
} as const;

export const styleguideSectionIds = [
  'introduction',
  'color',
  'typography',
  'spacing',
  'buttons',
  'forms',
  'badges',
  'cards',
  'navigation',
  'sections',
  'accessibility',
] as const;

export type StyleguideSectionId = (typeof styleguideSectionIds)[number];

export const styleguideNav: { id: StyleguideSectionId; label: string }[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'color', label: 'Color' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing & layout' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'forms', label: 'Forms' },
  { id: 'badges', label: 'Badges' },
  { id: 'cards', label: 'Cards' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'sections', label: 'Section patterns' },
  { id: 'accessibility', label: 'Accessibility' },
];
