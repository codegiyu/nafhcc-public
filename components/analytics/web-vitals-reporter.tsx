'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { isBudgetExceeded, type WebVitalName } from '@/lib/performance/budgets';

export function WebVitalsReporter() {
  useReportWebVitals(metric => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const name = metric.name as WebVitalName;

    if (isBudgetExceeded(name, metric.value)) {
      console.warn(`[web-vitals] ${name} exceeded budget:`, metric.value);
    }
  });

  return null;
}
