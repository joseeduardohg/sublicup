'use client';

import type { LucideIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import './button.css';

type ButtonProps = PropsWithChildren & {
  icon?: LucideIcon;
  onClick?: () => void;
};

export default function Button({ icon: Icon, children, onClick }: ButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      {children}
      {Icon && <Icon />}
    </button>
  );
}
