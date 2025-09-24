import "./style.css";
import SectionHeader from "../SectionHeader";

function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contacto">
  <div className="contact-container">
          <SectionHeader
            subtitle="Contacto"
            title="Ponte en contacto con nosotros"
            description="¿Tienes alguna pregunta o necesitas ayuda? Contáctanos."
          />
    <div className="contact-info">
   
    <form className="contact-form">
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Correo electrónico" required />
      <textarea placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
      </div>
      </div>
      </section>
  );
  
  }

    export default Contact;
