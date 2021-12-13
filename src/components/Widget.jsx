import { contexto } from "../UseContext/CardContxt";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Widget = () => {
  const { carrito } = useContext(contexto);

  return (
    <>
      <Link to={`/cart`}>
        <div className="contenedorCarrito">
          <div className="material-icons shoppingCart"> shopping_cart</div>

          {carrito.length > 0 && (
            <div id="cart_notificacion">
              <div className="numeroNotificacionCarrito">{carrito.length} </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Widget;
