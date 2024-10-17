import './page.css';
export default function ContactPage() {
  return (
    <main>
      <h1 className='Titulo_contacto'>Contacto</h1>

      <section className='contacto'>
        <div className='izquierda'>
          <h2>Ponte en contacto</h2>
          <p>Oficina Central</p>
          <p>
            Mándanos un email:
            <a href='mailto:info@example.com'>info@example.com</a>
          </p>
          <p>Llámanos: +52 9981234567</p>
        </div>

        <div className='derecha'>
          <form>
            <label>Nombre:</label>
            <input type='text' name='nombre' required />
            <br />
            <label>Correo electrónico:</label>
            <input type='email' name='correo' required />
            <br />
            <label>Teléfono:</label>
            <input type='tel' name='teléfono' required />
            <br />
            <label>Mensaje:</label>
            <textarea name='mensaje' required></textarea>
            <br />
            <label>Opiniones</label>
            <textarea name='Opinion' required></textarea>
            <br />
            <button type='submit'>Enviar</button>
          </form>
        </div>

        <div className='redes-sociales'>
          <h2>Síguenos en redes sociales</h2>
          <ul>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#' target='_blank'>
                <i className='fa fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
