'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import './custom-link.css';

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
      className={`link ${pathname === href ? 'link--active' : ''}`.trim()}
    >
      {Icon && <Icon />}
      {children}
    </Link>
  );
}
