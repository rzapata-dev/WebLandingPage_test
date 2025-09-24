import "./style.css";

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials" aria-label="Testimonios de clientes">
  <div className="testimonials-container">
    
    <div className="testimonials-slider">
      <div className="testimonial">
        <blockquote>
          “La transparencia de esta casa de cambio en Barranco es lo que más me da confianza. Siempre encuentro tasas claras y sin letras pequeñas. El trato es cercano y profesional, lo que me hace sentir que mi dinero está en buenas manos. En pocos meses he notado la diferencia frente a otros servicios que solía usar.”
        </blockquote>
        <cite>Sergio Fernández</cite>
      </div>
      <div className="testimonial">
        <blockquote>
       “Al principio tenía dudas porque había tenido malas experiencias en otros lugares, pero aquí la seguridad es evidente. Desde el primer cambio me dieron total claridad en el proceso y siempre recibo comprobantes y soporte. Es un alivio saber que tengo un lugar de confianza tan cerca.”
        </blockquote>
        <cite>Laura Martínez</cite>
      </div>
      <div className="testimonial">
        <blockquote>
          “Vivo en Barranco y necesitaba una casa de cambio local que fuera confiable. No solo encontré buenas tasas, sino que también me sentí atendido de forma personalizada. Se nota que priorizan al cliente y no solo la transacción. Sin duda lo recomiendo a cualquiera que valore su tiempo y su dinero.”
        </blockquote>
        <cite>Carlos Gómez</cite>
      </div>
    </div>
  </div>
</section>

  );
}

export default Testimonials;
