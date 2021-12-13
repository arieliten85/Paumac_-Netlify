import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";

const Contador = ({ addInfo }) => {
  const [contador, setContador] = useState(1);
  const stock = 5;
  const min = 1;

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > min) {
      setContador(contador - 1);
    }
  };

  const confirmacion = () => {
    if (contador >= 1) {
      addInfo(contador);
    }
  };

  return (
    <Fragment>
      <div className="Contenes_contador">
        <div className="botones_Contador">
          <button onClick={sumar} className="material-icons botones">
            add
          </button>
          <div className="contador">{contador}</div>
          <button onClick={restar} className="material-icons botones">
            remove
          </button>
        </div>

        <button onClick={confirmacion} className="btnCarrito">
          Agregar al Carrito
        </button>
      </div>
    </Fragment>
  );
};

export default Contador;
