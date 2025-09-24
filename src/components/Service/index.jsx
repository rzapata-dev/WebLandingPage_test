import "./style.css";
import SectionHeader from "../SectionHeader";

function Service() {
  return (
    <section id="service" className="service" aria-label="Servicios">
      <div className="service-container">
        <SectionHeader
          subtitle="Nuestros servicios"
          title="Lo que ofrecemos para ti"
          description="Un servicio seguro, rápido y transparente en el corazón de Barranco."
        />

        <div className="service-cards">
          {/* Servicio 1 */}
          <div className="service-card service-card-left">
          <article >
            <h3>Cambio de divisas</h3>
            <p>
              Realizaremos el cambio de tus divisas con las mejores tasas del mercado,
              sin comisiones ocultas y con total transparencia.
            </p>
            <a href="/cambio" className="button-service" aria-label="Realizar cambio de divisas">
              Realizar cambio
            </a>
            <img src="https://via.placeholder.com/600x400" alt="Cambio de divisas en Barranco" />
          </article>
          </div>

          {/* Servicios agrupados en la derecha */}
          <div className="service-card service-card-right">
            <article>
              <h3>Seguridad garantizada</h3>
              <p>
                Nuestro sistema cuenta con protocolos de seguridad avanzados para
                proteger cada transacción, brindándote confianza en cada operación.
              </p>
              <a href="/seguridad" className="button-service" aria-label="Más información sobre seguridad">
                Conocer más
              </a>
              <img src="https://via.placeholder.com/600x400" alt="Seguridad en transacciones" />
            </article>

            <article>
              <h3>Atención personalizada</h3>
              <p>
                Te ofrecemos asesoría directa para resolver tus dudas y acompañarte
                en cada paso. Nuestro equipo está disponible para ayudarte cuando
                lo necesites.
              </p>
              <a href="/atencion" className="button-service" aria-label="Más información sobre atención personalizada">
                Contactar asesor
              </a>
              <img src="https://via.placeholder.com/600x400" alt="Atención al cliente personalizada" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
