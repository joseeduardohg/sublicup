import { ProductCard } from '@/components';
import prisma from '@/lib/db';
import styles from './page.module.css';

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await prisma.category.findMany();

  return categories.map(({ slug }) => ({
    category: slug,
  }));
}

type ProductsPageParams = {
  category: string;
};

type ProductsPageProps = {
  params: Promise<ProductsPageParams>;
};

export default async function ProductsPage({ params }: ProductsPageProps) {
  const slug = (await params).category;
  const category = await prisma.category.findUnique({ where: { slug } });
  const products = await prisma.product.findMany({
    include: { category: true },
    where: { category: { slug } },
  });

  return (
    <div className={styles.page}>
      {/* <p>Breadcrumb</p> */}

      {/* <Input placeholder='Search' /> */}

      <div className={styles.container}>
        <h1>{category?.name}</h1>

        <ul className={styles.grid}>
          {products
            .filter((product) => product.category.id === category?.id)
            .map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
