import { contexto } from "../UseContext/CardContxt";
import { Fragment, useContext } from "react";

import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, Setcarrito } = useContext(contexto);
  const { PrecioTotal } = useContext(contexto);

  const { abrirCheckOut } = useContext(contexto);

  const borrarItem = (titulo) => {
    const ItemBorrado = carrito.filter((item) => item.titulo !== titulo);
    Setcarrito(ItemBorrado);
  };

  const checkOut = () => {
    abrirCheckOut();
  };

  return (
    <Fragment>
      <h1 className="tituloCarrito"> Tu carrito de Compras </h1>

      <div className="contenedor_carrito">
        <div className="contenedor_seguirComprando">
          {carrito.length > 0 && (
            <Link to="/productos">
              <div className="item_SeguirComprando_boton">
                <div className="SeguirComprando_boton ">
                  <div className="material-icons arrow_back_ios ">
                    {" "}
                    arrow_back_ios
                  </div>
                  Seguir Comprando
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="centerCart">
          <div className="ContenedorCarrito">
            <div className="contenedor_productos">
              {carrito.map((item, index) => (
                <div className="carrito">
                  <div className="item_producto">
                    <div className="conteImagen">
                      <img className="img_carrito" src={item.imagen} />
                    </div>

                    <div className="conteInfoProducto">
                      <div className="titulo_carrito">{item.titulo}</div>
                      <div className="cantidad_carrito">
                        Cantidad: {item.cantidad}
                      </div>
                      <div className="material-icons star  ">
                        {" "}
                        star star star star star{" "}
                      </div>
                      <div className="precio_carrito">
                        {" "}
                        $ {item.precio * item.cantidad}{" "}
                        <div className="sale_precio">$3500</div>
                        <div className="material-icons local_offer sale_tag ">
                          {" "}
                          local_offer{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => borrarItem(item.titulo)}
                      className="btnBorrar"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {carrito.length > 0 && (
              <div className="contenedorTotal">
                <Link to="/CheckOut">
                  <button className="btnPagar">Pagar</button>
                </Link>

                <div className="total">
                  <div className="text_total">Total</div>
                  <br /> $ {PrecioTotal}{" "}
                </div>
              </div>
            )}
          </div>
          {carrito.length === 0 && (
            <div className="carritoVacio">
              <h4> Carrito Vacio</h4>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
