import { Button } from '@/components/ui';
import Image from 'next/image';
import styles from './product-card.module.css';

export type Product = {
  id: string;
  category: string;
  name: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={280}
        height={280}
        src='https://via.assets.so/album.png?id=11&q=95&fit=fill'
        alt='Product'
      />

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>

        <Button size='small'>Añadir al carrito</Button>
      </div>
    </div>
  );
}
