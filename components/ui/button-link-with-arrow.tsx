import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonLinkWithArrowProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    showArrow?: boolean;
  };

export function ButtonLinkWithArrow({
  href,
  className,
  variant,
  size,
  children,
  showArrow = false,
  ...props
}: ButtonLinkWithArrowProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
      {showArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </Link>
  );
}
