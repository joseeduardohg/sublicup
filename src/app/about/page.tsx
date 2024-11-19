import taza1 from '@/images/taza1.jpeg';
import taza2 from '@/images/taza2.jpeg';
import Image from 'next/image';
import './page.css';

export default function AboutPage() {
  return (
    <main className='section'>
      <h2>Sobre Nosotros</h2>

      <p>
        En Sublicup, nos especializamos en la personalización de tazas, playeras
        y termos, ofreciendo un servicio a domicilio para que puedas llevar tu
        estilo a cualquier lugar.
      </p>
      <p>
        Fundada en 2023, Sublicup nació de la pasión por el diseño personalizado
        y el deseo de brindar a nuestros clientes productos únicos.
      </p>
      <p>
        Nuestra misión es ofrecer productos de calidad que reflejen la
        personalidad de nuestros clientes, todo con la comodidad de un servicio
        a domicilio. Nos guiamos por valores de creatividad, calidad y un
        compromiso excepcional hacia el cliente.
      </p>
      <p>
        ¡Descubre nuestra variedad de productos y personaliza el tuyo hoy mismo!
      </p>
      <section className='imagenes'>
        <Image
          src={taza1}
          alt='taza1.jpg'
          width={300}
          height={300}
          className='about-image'
        />
        <Image
          src={taza2}
          alt='taza2.jpg'
          width={300}
          height={300}
          className='about-image'
        />
      </section>
    </main>
  );
}
