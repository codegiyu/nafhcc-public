import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TextActionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextActionLink({
  href,
  children,
  className,
  showArrow = true,
}: TextActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}>
      {children}
      {showArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </Link>
  );
}
