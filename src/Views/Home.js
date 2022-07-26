import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return  ( 
  <div className="body-home" id="home">
  <svg className="vector-arrow" width="54" height="214" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.333 3a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0ZM.501 212.971a.5.5 0 0 0 .47.528l4.492.263a.5.5 0 1 0 .059-.998l-3.994-.234.234-3.993a.5.5 0 0 0-.998-.059L.5 212.971ZM30.556 3.23c10.801 20.854 22.276 56.373 21.57 95.098-.707 38.712-13.584 80.61-51.458 114.298l.664.748c38.126-33.912 51.083-76.098 51.793-115.027.71-38.916-10.815-74.598-21.681-95.577l-.888.46Z"
      fill="#181818" />
  </svg>
  <svg className="vector-line" width="1829" height="670" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#181818" d="M0 .5h1829M0 223.5h1829M0 446.5h1829M0 669.5h1829" />
  </svg>
  <main className="container">
    <div className="title-container">
        amor
      </div>
    <div className="center-container">
      estudio de diseño gráfico 
    </div>
    <div className="construction-container">
      Nuestro sitio está en construcción, pero puedes ver nuestro trabajo en
   </div>  
   <a href="https://www.instagram.com/amor.estgr/?hl=en" className="ig-container">Instagram</a>
   <a href="https://www.behance.net/gallery/113078441/amorestgr-Branding" className="behance-container">Behance</a>
 {/* <!--   <img src="../skins/home/vector_1.png" className="vector-container" /> --> */}
   <div className="brand-container" >
      Branding e Ilustración
  </div>
  <div
    id="gif-container"
    classNameName="gif-container"
  >   </div>
  <Link to="/Contact"className="paginator-container"> amor Estudio </Link>
</main>

</div>

)

}

