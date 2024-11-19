import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-card.module.css';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/products/${product.slug}`}>
        <div className={styles.header}>
          <Image
            width={280}
            height={280}
            src='https://placehold.co/280.png'
            alt='Product'
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.footer}>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
