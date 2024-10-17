import tazaLogo from '@/images/taza-logo.jpeg';
import Testimonio2 from '@/images/Testimonio2.jpg';
import Image from 'next/image';

import './page.css';

export default function Home() {
  return (
    <main>
      <section className='seccion-principal'>
        <section className='SP-textos'>
          <h2>Si puedes imaginarlo, podemos sublimarlo</h2>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam
            vitae voluptate explicabo dolores quasi officia sequi asperiores,
            illum libero.
          </p>
        </section>

        <section>
          <Image width={500} height={300} src={tazaLogo} alt='' />
        </section>
      </section>

      <section className='galeria'></section>

      <section className='testimonios'>
        <h2>Testimonios</h2>

        <section className='testimonios-seccion'>
          <section className='testimonios-perfiles'>
            <Image width={400} height={400} src={Testimonio2} alt='' />
            <p>NOMBRE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aut!
            </p>
          </section>

          <section className='testimonios-perfiles'>
            <Image width={400} height={400} src={Testimonio2} alt='' />
            <p>NOMBRE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aut!
            </p>
          </section>

          <section className='testimonios-perfiles'>
            <Image width={400} height={400} src={Testimonio2} alt='' />
            <p>NOMBRE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aut!
            </p>
          </section>

          <section className='testimonios-perfiles'>
            <Image width={400} height={400} src={Testimonio2} alt='' />
            <p>NOMBRE</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aut!
            </p>
          </section>
        </section>
      </section>

      <section className='mapa'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27026.21769816903!2d-86.8695214378101!3d21.128267383112572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2be8f1679b3d%3A0x7ca6036dd487c1e5!2sTecNM%20-%20Campus%20Canc%C3%BAn!5e1!3m2!1ses-419!2smx!4v1728976651023!5m2!1ses-419!2smx'
          width='100%'
          style={{ border: 0 }}
          loading='lazy'
        ></iframe>
      </section>
    </main>
  );
}
