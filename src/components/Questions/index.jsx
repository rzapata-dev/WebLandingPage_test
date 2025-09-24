import "./style.css";
import SectionHeader from "../SectionHeader";

function Questions() {
  return (
    <section id="questions" className="questions" aria-label="Preguntas">   
    <div className="questions-container">
         <SectionHeader
            subtitle="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            description="Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios."
            />
     </div>
     </section>
     )};
     export default Questions;