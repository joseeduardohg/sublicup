'use client';
import descarga from '@/images/descarga.jpg';
import Image from 'next/image';
import './page.css';
import { Button } from '@/components/ui';
import { Minus, Plus } from 'lucide-react';

export default function ProductsPage() {
  return (
    <main>
      <section className='imagen_resumen'>
        <section>
          <Image src={descarga} width={400} height={400} alt='tasa' />
        </section>

        <section className='seccion_resumen'>
          <h1> tasa blanca tokyo revengers</h1> <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            porro, dolores, consequuntur veniam a sequi amet voluptatibus,
            dignissimos sunt dolorem in iste? Itaque corrupti sapiente quam
            totam quis? Voluptates, neque.
          </p>
          <h2 className='precio'>$300 pesos</h2>
          {/* <button className='boton'>comprar</button> */}
          <Button className='boton'>Comprar</Button>
        </section>
      </section>

      <section className='mas-menos'>
        <button className='mas'> +</button>
        {/* <Button intent='secondary' icon={Minus} /> */}
        <h3>1</h3>
        {/* <Button intent='secondary' icon={Plus} /> */}
        <button className='mas'>-</button>
      </section>
    </main>
  );
}
