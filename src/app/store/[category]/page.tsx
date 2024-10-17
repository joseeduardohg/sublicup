import { ProductCard } from '@/components';
import styles from './page.module.css';

const categories = [
  {
    category: 't-shirts',
    label: 'Playeras',
  },
  {
    category: 'cups',
    label: 'Tazas',
  },
  {
    category: 'thermos',
    label: 'Termos',
  },
];

const products = [
  {
    id: '1',
    category: 't-shirts',
    name: 'Playera 1',
    price: 100,
  },
  {
    id: '2',
    category: 't-shirts',
    name: 'Playera 2',
    price: 150,
  },
  {
    id: '3',
    category: 'cups',
    name: 'Taza 1',
    price: 50,
  },
  {
    id: '4',
    category: 'cups',
    name: 'Taza 2',
    price: 75,
  },
  {
    id: '5',
    category: 'thermos',
    name: 'Termo 1',
    price: 200,
  },
  {
    id: '6',
    category: 'thermos',
    name: 'Termo 2',
    price: 250,
  },
];

export const dynamicParams = false;

export async function generateStaticParams() {
  return categories.map(({ category }) => ({
    category,
  }));
}

type ProductsPageParams = {
  category: string;
};

type ProductsPageProps = {
  params: ProductsPageParams;
};

export default function ProductsPage({
  params: { category },
}: ProductsPageProps) {
  const label = categories.find((c) => c.category === category)?.label;

  return (
    <div className={styles.page}>
      <p>Breadcrumb</p>

      <p>Search Bar</p>

      <div className={styles.grid}>
        <h1>{label}</h1>

        <ul>
          {products
            .filter((product) => product.category === category)
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
