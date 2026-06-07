export const performanceBudgets = {
  lcpMs: 2500,
  inpMs: 200,
  cls: 0.1,
} as const;

export type WebVitalName = 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TTFB';

export function isBudgetExceeded(metric: WebVitalName, value: number): boolean {
  switch (metric) {
    case 'LCP':
      return value > performanceBudgets.lcpMs;
    case 'INP':
      return value > performanceBudgets.inpMs;
    case 'CLS':
      return value > performanceBudgets.cls;
    default:
      return false;
  }
}
