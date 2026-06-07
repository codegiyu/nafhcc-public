import { ReactNode } from 'react';

type InternalStyleguideLayoutProps = {
  children: ReactNode;
};

/** Minimal shell — no marketing header/footer or skip-link wrapper. */
export default function InternalStyleguideLayout({ children }: InternalStyleguideLayoutProps) {
  return children;
}
