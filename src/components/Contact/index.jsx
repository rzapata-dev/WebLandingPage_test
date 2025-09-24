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
        <h2 className="contact__form-title">Escríbenos</h2>
        <form className="contact__form">
           {/* Grupo Nombre y Teléfono en línea */}
           
           
          <div className="contact__form-row">
            <label htmlFor="name">Nombre</label>
            <input 
            id="name" 
            name="name" 
            type="text" 
            required />

            <label htmlFor="phone">Teléfono</label>
            <input 
            id="phone" 
            name="phone" 
            type="tel" 
            required />

          </div>
          

          <label htmlFor="email">Correo</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="contact__submit">Enviar</button>
        </form>
      </div>

      {/* Datos */}
      <div className="contact__content-right">
         <h2 className="contact__info-title">Información de contacto</h2>
        <section className="contact__info">
         

          <article className="contact__card">
            <img src="phone.svg" alt="" aria-hidden="true" />
            <h3 className="contact__card-title">Teléfono</h3>
            <p className="contact__card-text">77321547</p>
          </article>

          <article className="contact__card">
            <img src="map.svg" alt="" aria-hidden="true" />
            <h3 className="contact__card-title">Dirección</h3>
            <p className="contact__card-text">AV 123 Springfield</p>
          </article>

          <article className="contact__card">
            <img src="mail.svg" alt="" aria-hidden="true" />
            <h3 className="contact__card-title">Correo electrónico</h3>
            <p className="contact__card-text">office@gmail.com</p>
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
