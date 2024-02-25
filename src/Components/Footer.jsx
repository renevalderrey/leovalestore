import React from "react";
import logo from "../Images/Logo_oficial.jpg";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#/ubicacionycontacto">
        <div className="title">
          <h1>LEOVALESTORE</h1>
          <h4>Peluquería Le Coiffure</h4>
          <h4>General Martín de Güemes 166 - Local B</h4>
        </div>
      </a>
      <a href="#/">
        <img className="logo-footer" src={logo} />
      </a>
      <div className="contact-footer">
        <a href="https://www.instagram.com/leovalestore/" target="_blank">
          <div className="instagram">
            <img src={instagram} />
            <p>@leovalestore</p>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5493517181495"
          target="_blank"
        >
          <div className="whatsapp">
            <img src={whatsapp} />
            <p>+54 9 351 718 1495</p>
          </div>
        </a>
      </div>
      <p>
        Powered <b>By RMWebs®</b> - 2024
      </p>
    </footer>
  );
};

export default Footer;
