import Counter from '@/components/counter/counter';
import { Button } from '@/components/ui';
import prisma from '@/lib/db';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

type ProductPageParams = {
  product: string;
};

type ProductPageProps = {
  params: Promise<ProductPageParams>;
};

export default async function ProductsPage({ params }: ProductPageProps) {
  const slug = (await params).product;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (product == null) notFound();

  return (
    <main>
      <section className={styles.container}>
        <section className={styles.imageContainer}>
          <Image
            src='https://placehold.co/400.png'
            width={400}
            height={400}
            alt='Taza'
          />
        </section>

        <section className={styles.details}>
          <h2>{product.name}</h2> <br />
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <Button>Comprar ahora</Button>
          <Counter />
        </section>
      </section>
    </main>
  );
}
