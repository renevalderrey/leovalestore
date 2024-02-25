import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Peluqueria from "../Images/Peluqueria.jpg";
import Nails from "../Images/Nails.jpg";
import Setup from "../Images/Setup.jpg";
import Setup2 from "../Images/Setup2.jpg";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <article className="container-contact">
        <div className="container-peluqueria">
          <h2>PELUQUERÍA</h2>
          <h3>Gisela Betancourt</h3>
          <p>
            <b>Teléfono: </b>+54 9 351 280 9100
          </p>
          <p>
            <b>WhatsApp: </b>+54 9 351 280 9100
          </p>
          <p>
            <b>Instagram: </b>@giselabetancourt0
          </p>
        </div>
        <div className="container-manicura">
          <h2>MANICURA</h2> <h3>Leomarys Fajardo</h3>
          <p>
            <b>Teléfono: </b>+54 9 351 718 1495
          </p>
          <p>
            <b>WhatsApp: </b>+54 9 351 718 1495
          </p>
          <p>
            <b>Instagram: </b>@leovalestore
          </p>
        </div>
        <div className="container-img-contact">
          <img src={Nails} />
          <img src={Peluqueria} />
          <img src={Setup} />
          <img src={Setup2} />
        </div>
      </article>
      <iframe
        className="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0439742213302!2d-64.16333112511825!3d-31.41291449608217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a33a680d3aab%3A0x22ff627fbd145514!2zUGVsdXF1ZXLDrWEg4oCcTGUgQ29pZmZ1cmXigJ0!5e0!3m2!1ses-419!2sar!4v1708817913029!5m2!1ses-419!2sar"
        loading="lazy"
      />
      <Footer />
    </>
  );
};

export default Contact;
