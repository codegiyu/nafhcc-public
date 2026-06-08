'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { fadeInUpVariants } from '@/components/motion/motion-variants';
import { cn } from '@/lib/utils';

type FadeInUpProps = {
  children: ReactNode;
  className?: string;
  contentKey?: string | number;
};

export function FadeInUp({ children, className, contentKey }: FadeInUpProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={contentKey}
      variants={fadeInUpVariants}
      className={cn('overflow-hidden', className)}
      initial="hidden"
      animate={contentKey ? 'visible' : undefined}
      whileInView={contentKey ? undefined : 'visible'}
      viewport={contentKey ? undefined : { once: true, amount: 0.2, margin: '-80px' }}>
      {children}
    </motion.div>
  );
}
