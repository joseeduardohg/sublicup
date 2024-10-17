'use client';

import { CustomLink } from '@/components/ui';
import avatar from '@/images/avatar.jpg';
import logo from '@/images/logo.png';
import { CircleUser, Contact, House, Shapes } from 'lucide-react';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt='logo' width={40} height={40} />

      <section className={styles.navbar}>
        <nav className={styles.nav}>
          <CustomLink href='/' icon={House}>
            Inicio
          </CustomLink>
          <CustomLink href='#' icon={Shapes}>
            Categorías
          </CustomLink>
          <CustomLink href='/contact' icon={Contact}>
            Contacto
          </CustomLink>
          <CustomLink href='/about' icon={CircleUser}>
            Sobre Nosotros
          </CustomLink>
        </nav>

        <section className={styles.options}>
          <Image src={avatar} alt='logo' width={40} height={40} />
        </section>
      </section>
    </header>
  );
}
