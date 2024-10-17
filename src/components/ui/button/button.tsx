'use client';

import { cva } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import styles from './button.module.css';

const button = cva(styles.button, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  // compoundVariants: [],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonProps = PropsWithChildren & {
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  intent,
  size,
  icon: Icon,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${button({ intent, size })} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
}
