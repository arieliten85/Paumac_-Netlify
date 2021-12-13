import { contexto } from "../UseContext/CardContxt";
import { useContext } from "react";

const PrecioTotal = () => {
  const { carrito } = useContext(contexto);

  return (
    <>
      {carrito.map((item) => (
        <div> Total: $ {item.precio * item.cantidad}</div>
      ))}
    </>
  );
};

export default PrecioTotal;
