import React from "react";
import logo from "../Images/Logo_oficial.jpg";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#/">
        <img src={logo} className="logo" />
      </a>
      <ul>
        <li>
          <a href="#/servicios">SERVICIOS</a>
        </li>
        <li>
          <a href="#/sitiodetrabajo">LUGAR DE TRABAJO</a>
        </li>
        <li>
          <a href="#/inspo">INSPO</a>
        </li>
        <li>
          <a href="#/promociones">PROMOCIONES</a>
        </li>
        <li>
          <a href="#/informacion">INFORMACIÓN</a>
        </li>
        <li>
          <a href="#/ubicacionycontacto">UBICACIÓN Y CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
