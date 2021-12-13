import { createContext, useState, useEffect } from "react";
export const contexto = createContext();
export const { Provider } = contexto;

export const CustomProvider = ({ children }) => {
  let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

  if (!carritoStorage) {
    carritoStorage = [];
  }

  const [carrito, Setcarrito] = useState(carritoStorage);

  useEffect(() => {
    if (carritoStorage) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      localStorage.setItem("carrito", JSON.stringify([]));
    }
  }, [carrito]);

  const PrecioTotal = carrito.reduce(
    (item1, item2) => item1 + item2.precio * item2.cantidad,
    0
  );

  const agregarProducto = (cantidad, producto) => {
    console.log(cantidad, producto);

    Setcarrito([...carrito, { cantidad, ...producto }]);

    const existe = carrito.find((item) => item.titulo === producto.titulo);

    if (existe) {
      Setcarrito(
        carrito.map((item) =>
          item.titulo === producto.titulo
            ? { ...existe, cantidad: existe.cantidad + 1 }
            : item
        )
      );
    }
  };

  const abrirCheckOut = () => {
    const buy = document.querySelector("#buy");
    buy.style.display = "block";
  };

  const valor_useContexto = {
    carrito: carrito,
    Setcarrito: Setcarrito,
    agregarProducto: agregarProducto,
    PrecioTotal: PrecioTotal,

    abrirCheckOut: abrirCheckOut,
  };
  return <Provider value={valor_useContexto}>{children}</Provider>;
};
