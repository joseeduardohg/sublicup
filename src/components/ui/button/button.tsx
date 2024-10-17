'use client';

import type { LucideIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import styles from './button.module.css';

type ButtonProps = PropsWithChildren & {
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  icon: Icon,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
      {Icon && <Icon />}
    </button>
  );
}
