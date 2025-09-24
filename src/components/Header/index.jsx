import "./style.css";

function Header() {
  return (
    <header className="header">
      
      <div className="header-container">
      <div className="logo">Mi Logo</div>
            
      <div className="nav-container">
      <nav className="nav nav-middle">
        <a href="#quienes-somos">Quienes somos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
         <a href="#preguntas">Preguntas</a>
      </nav>
      </div>

     <nav className="nav nav-right">
        <a href="#empieza-ahora">Empieza ahora</a>
        <a href="">Login</a>
      </nav>
      </div>

    </header>
  );
}

export default Header;
