import { Link } from "react-router-dom";
import Widget from "../Widget";

import React, { useState } from "react";

const Navegacion = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  window.addEventListener("scroll", menuFixed);

  function menuFixed() {
    let navegacion = document.querySelector(".nav-menu_medium");
    navegacion.classList.toggle("fixed", window.scrollY > 236);

    let miniLogo = document.querySelector(".miniLogo");
    miniLogo.classList.toggle("miniLogoVisible", window.scrollY > 236);
  }

  return (
    <>
      <div className="navbar">
        <div>
          <button onClick={showSidebar} className="material-icons DropDown">
            {" "}
            menu{" "}
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="menu-bars">
              <div className="item_Logo_text">
                <span className="miniLogo">Paula - Mac</span>
              </div>
              <button
                onClick={showSidebar}
                className="material-icons close_DropDown"
              >
                {" "}
                close{" "}
              </button>
            </div>
          </li>

          <div className="item_enlaces">
            <div className="item_Widget">
              <Link to="/ContenedorCarrito">
                <Widget />
              </Link>
            </div>

            <li className="item_link">
              <Link to="/bienvenidos" className="link">
                Bienvenidos
              </Link>
            </li>
            <li className="item_link">
              <Link to="/productos" className="link">
                sesiones
              </Link>
            </li>
          
            <li className="item_link">
              <Link to="/galeria" className="link">
                galeria
              </Link>
            </li>
            <li className="item_link">
              <Link to="/contacto" className="link">
                Contacto
              </Link>
            </li>
            
          </div>
        </ul>
      </nav>





      <div className="nav-menu_medium">
        <div className="item_Logo_text">
          <span className="miniLogo">Paula - Mac</span>
        </div>

        <ul className="item_nav_medium">
          <li>
            <Link to="/bienvenidos" className="link">
              Bienvenidos
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link">
              sesiones
            </Link>
          </li>
         
          <li>
            <Link to="/galeria" className="link">
              galeria
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link">
              Contacto
            </Link>
          </li>
          
        </ul>
        <div className="item_Widget">
          <Link to="/ContenedorCarrito">
            <Widget />
          </Link>
        </div>
      </div>
    </>
  );
};


export default Navegacion;


  