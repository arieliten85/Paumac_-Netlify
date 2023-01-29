import { Fragment } from "react";
import Logo from "../../img/LOGO STOCKERS.png";

const Header = () => {
  return (
    <Fragment>
      <div className="contLogo">
        <img className="logo" src={Logo} />
        <p className="encabezadoTitulo">
         - Fotógrafia de Familias - Bebes - Niños - Embarazadas -
        </p>
      </div>
    </Fragment>
  );
};

//Exportaciones
export default Header;
