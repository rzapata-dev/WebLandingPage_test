import "./style.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-info"> 
        <h2>Invierte como lo hacen los grandes inversores</h2>
        <h3>Comienza a rentabilizar tu dinero sin invertir demasiado tiempo conociendo la operativa diaria de inversores expertos que llevan haciéndolo más de 10 años.</h3>
        <p>/ Expertos en los siguientes pairs</p>
        <a href="#servicios" className="btn-primary">Ver Servicios</a>
        </div>

      <div className="hero-image">
        <img src="https://via.placeholder.com/600x400" alt="Hero" />
      </div>

      </div>

    </section>
  );
}
export default Hero;