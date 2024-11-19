'use client';

import { useCounter } from '@/hooks/useCounter';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui';
import styles from './counter.module.css';

export default function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <section className={styles.container}>
      <Button onClick={handleDecrement} intent='primary' icon={Minus}></Button>
      <span className={styles.counter}>{count}</span>
      <Button onClick={handleIncrement} intent='primary' icon={Plus}></Button>
    </section>
  );
}
