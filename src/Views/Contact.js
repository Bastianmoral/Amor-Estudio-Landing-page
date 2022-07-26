import React from "react";
import { Link } from "react-router-dom";


export default function Contact() {
  return <div 
          className="body-contact"
          id="contact"

        >
  <svg
    className="vector-lines-contact"
    width="1829"
    height="670"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="#F1ECE9"
      d="M0 .5h1829M0 223.5h1829M0 446.5h1829M0 669.5h1829"
    />
  </svg>
  <Link to="/">
  <svg
    className="vector-exit"
    width="160"
    height="161"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#F1ECE9" d="m.354.646 159 159M159.354 1.354l-159 159" />
  </svg>
  </Link>
  <div 
    className="container"> 
  <div className="contact-title">
    haz las cosas con <b>amor</b>
  </div>
  <div className="contact-text">
    Trabajemos juntos, escríbenos y conversemos sobre lo que necesitas
    <br />
    <div className="email">hola@amorestudio.design</div>
  </div>
  <a
    href="https://www.instagram.com/amor.estgr/?hl=en"
    className="ig-container-contact"
  >
    Instagram
  </a>
  <a
    href="https://www.behance.net/gallery/113078441/amorestgr-Branding"
    className="behance-container-contact"
  >
    Behance
  </a>
  <div className="brand-container-contact">Branding e Ilustración</div>
    <Link to="/"className="paginator-container"> amor Estudio </Link> 
    </div>
</div> 
}

