'use client';

import { ProductCard } from '@/components';
import { Button, CustomLink, Input } from '@/components/ui';
import { Circle } from 'lucide-react';
import styles from './page.module.css';

export default function Playground() {
  return (
    <div className={styles.container}>
      <h1>Playground</h1>

      <Button icon={Circle} onClick={() => alert('Hello!')}>
        Click me
      </Button>

      <div className={styles.wrapper}>
        <Input placeholder='Enter your name...' />
      </div>

      <CustomLink href='#' icon={Circle}>
        Foo
      </CustomLink>

      <ProductCard
        product={{ id: '1', name: 'Cup', price: 100, category: 'cups' }}
      />
    </div>
  );
}
