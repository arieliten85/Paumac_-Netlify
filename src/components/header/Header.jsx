import { Fragment } from "react";
import Logo from "../img2/LOGO STOCKERS.png";

const Header = () => {
  return (
    <Fragment>
      <div className="contLogo">
        <img className="logo" src={Logo} />
        <p className="encabezadoTitulo">
         - Fotógrafia de Familias - Bebes - Niños -
        </p>
      </div>
    </Fragment>
  );
};

//Exportaciones
export default Header;
