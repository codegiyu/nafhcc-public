import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

/** Next.js link with Button styling — native `<a>` semantics (no Base UI button wrapper). */
function ButtonLink({ href, className, variant, size, children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </Link>
  );
}

export { ButtonLink };
