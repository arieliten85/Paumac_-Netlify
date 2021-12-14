import { contexto } from "../UseContext/CardContxt";
import { useContext, useState } from "react";
import { getFirestore } from "./firebase";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { carrito, Setcarrito } = useContext(contexto);
  const { PrecioTotal } = useContext(contexto);


  const [id, setId] = useState("");

  const [cliente, actualizarCliente] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    postal: "",
    correo: "",
    pais: "",
    ciudad: "",
    envio: "",
    mdp: "",
  });
  const [error, actualizarError] = useState(false);

  let infoFecha = new Date();

  const fecha = {
    dia: infoFecha.getDate(),
    mes: infoFecha.getMonth(),
    año: infoFecha.getFullYear(),
    hora: infoFecha.toLocaleTimeString(),
  };
  const { dia, mes, año, hora } = fecha;

  const finalizarCompra = (e) => {
    e.preventDefault();

    console.log(nombre);

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      direccion.trim() === "" ||
      telefono.trim() === "" ||
      postal.trim() === "" ||
      correo.trim() === "" ||
      pais.trim() === "" ||
      ciudad.trim() === "" ||
      envio.trim() === "" ||
      mdp.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    const usuario = {
      nombre: nombre,
      apellido: apellido,
      email: correo,
      telefono: telefono,
    };

    const infoPago = {
      pais: pais,
      ciudad: ciudad,
      envio: envio,
      fecha: fecha,
      mdp: mdp,
    };

    const orden = {
      comprador: usuario,
      infoPago: infoPago,
      items: carrito,
      total: PrecioTotal,
    };

    const db = getFirestore();
    const collection = db.collection("ordenes");
    const query = collection.add(orden);

    query
      .then((resultado) => {
        setId(resultado.id);
      })
      .catch((error) => {
        console.log(error);
      });
    Setcarrito([]);
  };

  const actualizarState = (e) => {
    actualizarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const {
    nombre,
    apellido,
    correo,
    pais,
    ciudad,
    direccion,
    postal,
    envio,
    mdp,
    telefono,
  } = cliente;

  if (id) {
    return (
      <div className="contenedorOrden">
        <div className="ordenCompra">
          Tu orden se proceso con exito! <strong>Muachas Gracias!!</strong>{" "}
          {nombre} {apellido} por tu compra, <br />
          Numero de Compra : #<strong>{id}</strong>
          Feha: {dia}/{mes}/{año}
          Hora :{hora}
        </div>
        <div className="item_boton_orden">
          <Link to="/bienvenidos" className="link">
            <button class="btnComprar"> Inicio</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <form
          className=" mensajeCompraRealizada"
          id="buy"
          onSubmit={finalizarCompra}
        >
          <div className="form">
            {error ? (
              <p className="errorPreCompra">
                Todos los campos son obligatorios
              </p>
            ) : null}

            <div className="contenedor_form checkOut">
              <div className="form_cliente">
                <label className="titulo_Mdp">Datos Pesonales</label>
                <div className="cont_nombre_apellido">
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="inputs"
                    placeholder="Nombre"
                    onChange={actualizarState}
                    value={nombre}
                  />
                  <label>Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    className="inputs"
                    placeholder="Apellido"
                    onChange={actualizarState}
                    value={apellido}
                  />
                </div>

                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  className="inputs"
                  placeholder="Direccion"
                  onChange={actualizarState}
                  value={direccion}
                />

                <label>Cod.Postal</label>
                <input
                  type="text"
                  name="postal"
                  className="inputs"
                  placeholder="Codigo Postal"
                  onChange={actualizarState}
                  value={postal}
                />

                <div className="cont_nombre_apellido">
                  <label>telefono</label>
                  <input
                    type="text"
                    name="telefono"
                    className="inputs"
                    placeholder="Telefono"
                    onChange={actualizarState}
                    value={telefono}
                  />

                  <label>Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="inputs"
                    placeholder="@"
                    onChange={actualizarState}
                    value={correo}
                  />
                </div>

                <div className="item_pais_ciudad">
                  <label>Pais</label>
                  <select
                    name="pais"
                    className="pais"
                    onChange={actualizarState}
                    value={pais}
                  >
                    <option>Eliga una País</option>

                    <option>Argentina</option>
                  </select>

                  <label>Ciudad</label>
                  <select
                    name="ciudad"
                    className="ciudad"
                    onChange={actualizarState}
                    value={ciudad}
                  >
                    <option>Eliga una Cuidad</option>
                    <option>Lanús</option>
                    <option>Banfiel</option>
                    <option>Lomaz de Zamora</option>
                    <option>Avellaneza</option>
                  </select>
                </div>
              </div>

              <div className="cont_envios">
                <label className="titulo_Mdp">Envios</label>

                <div className="cntPago">
                  Free
                  <input
                    type="radio"
                    onChange={actualizarState}
                    type="radio"
                    name="envio"
                    value="Gratis"
                    checked={envio === "Gratis"}
                    className="radio"
                  />
                </div>

                <div className="cntPago">
                  Dentro de las 24hs $540
                  <input
                    type="radio"
                    onChange={actualizarState}
                    type="radio"
                    name="envio"
                    value="Pago"
                    checked={envio === "Pago"}
                    className="radio"
                  />
                </div>

                <label className="titulo_Mdp">Metodo de Pago</label>
                <div className="cntPago">
                  Efetivo
                  <input
                    className="radio"
                    type="radio"
                    onChange={actualizarState}
                    type="radio"
                    name="mdp"
                    value="efectivo"
                    checked={mdp === "efectivo"}
                    className="radio"
                  />
                </div>

                <div className="cntPago">
                  Mercado Pago
                  <input
                    type="radio"
                    onChange={actualizarState}
                    type="radio"
                    name="mdp"
                    value="MercadoPago"
                    checked={mdp === "MercadoPago"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="conte_btn_comprar_fin">
            <button type="submit" className="btnComprar">
              Finalizar Compra
            </button>
          </div>

        </form>
      </>
    );
  }
};
export default CheckOut;
