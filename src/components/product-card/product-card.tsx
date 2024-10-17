import { Button } from '@/components/ui';
import Image from 'next/image';
import styles from './product-card.module.css';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price }: ProductCardProps) {
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
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>

        <Button size='small'>Añadir al carrito</Button>
      </div>
    </div>
  );
}
