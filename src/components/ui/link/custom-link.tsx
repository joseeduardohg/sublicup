'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import styles from './custom-link.module.css';

type CustomLinkProps = PropsWithChildren & {
  href?: string;
  icon?: LucideIcon;
};

export default function CustomLink({
  href,
  icon: Icon,
  children,
}: CustomLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href ? href : '#'}
      className={`${styles.link} ${pathname === href ? styles.active : ''}`.trim()}
    >
      {Icon && <Icon />}
      {children}
    </Link>
  );
}
