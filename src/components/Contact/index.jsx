import "./style.css";
import SectionHeader from "../SectionHeader";

function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contacto">
      <div className="contact__container">
        <SectionHeader
          subtitle="Contacto"
          title="Ponte en contacto con nosotros"
          description="¿Tienes alguna pregunta o necesitas ayuda? Contáctanos."
        />

        <div className="contact__content">

          {/* Formulario */}
          <div className="contact__content-left">
            {/* <h2 className="contact__form-title">Escríbenos</h2> */}

            <form className="contact__form">
              <fieldset>
                <legend >Escríbenos</legend>

              
              <div className="contact__form-group half-width">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="contact__form-group half-width">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div className="contact__form-group full-width">
                <label htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="contact__form-group full-width">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <button type="submit" className="contact__submit full-width">
                Enviar
              </button>
              </fieldset>
            </form>
          </div>

          {/* Datos */}
          <div className="contact__content-right">
            <h2 className="contact__info-title">Información de contacto</h2>

            <section className="contact__info">
               <article className="contact__card half-width">
                <img
                  className="icon"
                  src="/src/assets/phone.svg"
                  alt="telefono"
                  aria-hidden="true"
                />
                <div className="contact__group">
                  <h3 className="contact__card-title">Teléfono</h3>
                  <p className="contact__card-text">77321547</p>
                </div>
              </article>

               <article className="contact__card half-width">
                <img
                  className="icon"
                  src="/src/assets/email.svg"
                  alt="correo"
                  aria-hidden="true"
                />
                <div className="contact__group">
                  <h3 className="contact__card-title">Correo electrónico</h3>
                  <p className="contact__card-text">office@gmail.com</p>
                </div>
              </article>

                <article className="contact__card full-width">
                <img
                  className="icon"
                  src="/src/assets/location.svg"
                  alt="ubicación"
                  aria-hidden="true"
                />
                <div className="contact__group">
                  <h3 className="contact__card-title">Dirección</h3>
                  <p className="contact__card-text">
                    Av. Grau N° 602-C Barranco Al frente de Inversiones La Cruz
                  </p>
                </div>
              </article>
            </section>

            <h2 className="contact__hours-title">Horario de atención</h2>
            <section className="contact__hours">
              <div className="contact__hours-item">
                <h3>Lunes - Viernes</h3>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className="contact__hours-item">
                <h3>Sábados</h3>
                <p>10:00 AM - 4:00 PM</p>
              </div>
              <div className="contact__hours-item">
                <h3>Domingos</h3>
                <p>Cerrado</p>
              </div>
            </section>
          </div>
        </div>

        {/* Mapa */}
        <div className="contact__map-container">
          <div className="contact__map" aria-label="Mapa de ubicación">
            <p>Aquí irá el mapa</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
