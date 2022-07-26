import React from "react";
import { Link } from "react-router-dom";


export default function Contact() {
  return <div class="body-contact">
  <svg
    class="vector-lines-contact"
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
    class="vector-exit"
    width="160"
    height="161"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#F1ECE9" d="m.354.646 159 159M159.354 1.354l-159 159" />
  </svg>
  </Link> 
  <div class="contact-title">
    haz las cosas con <b>amor</b>
  </div>
  <div class="contact-text">
    Trabajemos juntos, escríbenos y conversemos sobre lo que necesitas
    <br />
    <div class="email">hola@amorestudio.design</div>
  </div>
  <a
    href="https://www.instagram.com/amor.estgr/?hl=en"
    class="ig-container-contact"
  >
    Instagram
  </a>
  <a
    href="https://www.behance.net/gallery/113078441/amorestgr-Branding"
    class="behance-container-contact"
  >
    Behance
  </a>
  {/* <img src="../skins/home/vector_1.png" class="vector-container" /> */}
  <div class="brand-container-contact">Branding e Ilustración</div>
    <Link to="/"class="paginator-container"> amor Estudio </Link> 
</div> 
}

