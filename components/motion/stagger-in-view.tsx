'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { staggerContainerVariants, staggerItemVariants } from '@/components/motion/motion-variants';
import { cn } from '@/lib/utils';

type StaggerInViewProps = {
  children: ReactNode;
  className?: string;
  contentKey?: string | number;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItemVariants} className={cn('overflow-hidden', className)}>
      {children}
    </motion.div>
  );
}

export function StaggerInView({ children, className, contentKey }: StaggerInViewProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn('overflow-hidden', className)}>{children}</div>;
  }

  return (
    <motion.div
      key={contentKey}
      variants={staggerContainerVariants}
      className={cn('overflow-hidden', className)}
      initial="hidden"
      animate={contentKey ? 'visible' : undefined}
      whileInView={contentKey ? undefined : 'visible'}
      viewport={contentKey ? undefined : { once: true, amount: 0.1, margin: '-80px' }}>
      {children}
    </motion.div>
  );
}
