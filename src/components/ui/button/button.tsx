'use client';

import { PropsWithChildren } from 'react';
import './button.css';

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
