import "./style.css";
import SectionHeader from "../SectionHeader";
import Testimonials from "../Testimonials";

function About() {
  return (
    <section id="about" className="about" aria-label="Quiénes somos">
      <div className="about-container">
        <SectionHeader
          subtitle="Quiénes somos"
          title="Tu casa de cambio de confianza en Lima"
          description="Ofrecemos un servicio seguro, rápido y con las mejores tasas para que 
          cambies tu dinero sin complicaciones."
        />

        <div className="about-info">
          <div className="about-item">
            <img src="https://via.placeholder.com/600x400" alt="Seguridad en transacciones" />
            <h3>Misión</h3>
            <p>
              Brindar a cada cliente una experiencia de cambio confiable y
              accesible, apoyada en la innovación tecnológica y un trato
              personalizado.
            </p>
          </div>
          <div className="about-item">
            <img src="https://via.placeholder.com/600x400" alt="Seguridad en transacciones" />
            <h3>Visión</h3>
            <p>
              Ser reconocidos como la casa de cambio líder en Lima por nuestra
              innovación, seguridad y compromiso con nuestros clientes.
            </p>
          </div>
          <div className="about-item">
            <img src="https://via.placeholder.com/600x400" alt="Seguridad en transacciones" />
            <h3>Valores</h3>
            <p>
              Transparencia, confianza, responsabilidad y cercanía en cada
              transacción.
            </p>
          </div>
        </div>

        <div className="about-resume">
          <p>Más de 500+ clientes han confiado en nosotros</p>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

export default About;
