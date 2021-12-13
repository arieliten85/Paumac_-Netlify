import GaleriaContenedor from "../GaleriaContenedor";
import { Fragment } from "react";
const Inicio = () => {
  return (
    <Fragment>
      <h2>Geleria</h2>

      <ul className="contenedorGrid">
        <GaleriaContenedor />
      </ul>
    </Fragment>
  );
};
export default Inicio;
