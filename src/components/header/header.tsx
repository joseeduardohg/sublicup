'use client';

import { getCategories } from '@/actions/categories';
import { CustomLink } from '@/components/ui';
import avatar from '@/images/avatar.jpg';
import logo from '@/images/logo.png';
import { Category } from '@prisma/client';
import { CircleUser, Contact, House, Shapes } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from '../select/select';
import styles from './header.module.css';

export default function Header() {
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const handleCategories = async () => {
      const categories = await getCategories();

      setCategories(categories);
    };

    handleCategories();
  }, []);

  return (
    <header className={styles.header}>
      <Image src={logo} alt='logo' width={40} height={40} />

      <section className={styles.navbar}>
        <nav className={styles.nav}>
          <CustomLink href='/' icon={House}>
            Inicio
          </CustomLink>
          <Select
            label='Categorías'
            icon={Shapes}
            options={categories?.map((category) => ({
              value: category.slug,
              label: category.name,
            }))}
            // onOptionSelected={(selectedOption) => {
            //   console.log(selectedOption);
            //   router.push(`/store/${selectedOption.value}`);
            // }}
          />
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
