import React from "react";
import logo from "../Images/Screenshot_6.jpg"
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" />
      <ul>
        <li>
          <a href="/servicios">Servicios</a>
        </li>
        <li>
          <a href="/sitiodetrabajo">Sitio de trabajo</a>
        </li>
        <li>
          <a href="/inspo">Inspo</a>
        </li>
        <li>
          <a href="/promociones">Promociones</a>
        </li>
        <li>
          <a href="/informacion">Información</a>
        </li>
        <li>
          <a href="/ubicacionycontacto">Ubicación y Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
