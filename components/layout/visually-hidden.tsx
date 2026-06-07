import { ReactNode } from 'react';

type VisuallyHiddenProps = {
  children: ReactNode;
  as?: 'span' | 'p' | 'h1' | 'h2';
};

export function VisuallyHidden({ children, as: Tag = 'span' }: VisuallyHiddenProps) {
  return <Tag className="sr-only">{children}</Tag>;
}
