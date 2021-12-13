import { contexto } from "../../UseContext/CardContxt";
import { useContext, useState } from "react";
import { getFirestore } from "../firebase";
import { Link } from "react-router-dom";

const Contacto = () => {
  const { carrito, Setcarrito } = useContext(contexto);

  const [id, setId] = useState("");

  const [cliente, actualizarCliente] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    consulta: "",
    mensaje: "",
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
      telefono.trim() === "" ||
      correo.trim() === "" ||
      consulta.trim() === "" ||
      mensaje.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    const usuario = {
      nombre: nombre,
      telefono: telefono,
      email: correo,
      consulta: consulta,
      mensaje: mensaje,
      fecha: fecha,
    };

    const contacto = {
      correo: usuario,
    };

    const db = getFirestore();
    const collection = db.collection("contacto");
    const query = collection.add(contacto);

    query
      .then((resultado) => {
        setId(resultado.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarState = (e) => {
    actualizarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const {
    nombre,
    consulta,
    correo,
    mensaje,

    telefono,
  } = cliente;

  if (id) {
    return (
      <div>
        
        <div className="mensaje_enviado">Su correo se a enviado correctamente!</div>
        <div className="item_boton_orden">
          <Link to="/bienvenidos" className="link">


            <button class="btnComprar botonInicio_contacto "> Volver a inicio</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <form
          className=" mensajeCompraRealizada "
          id="buy"
          onSubmit={finalizarCompra}
        >
          <div className="form">
            {error ? (
              <p className="errorPreCompra">
                Todos los campos son obligatorios
              </p>
            ) : null}

            <div className=" formulario_contacto">
              <div className="form_cliente">
                <h3 className="titulo_formulario">
                  Solicita nuestros servicios
                </h3>

                <h4 className="subtitulo_formulario">
                  Por favor, introduce tus datos y te responderemos tan pronto
                  nos sea posible.
                </h4>

                <div className="item_label">
                  <label className="label_formulario">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="inputs_formulario"
                    onChange={actualizarState}
                    value={nombre}
                  />
                </div>

                <div className="item_label">
                  <label className="label_formulario">Telefono</label>
                  <input
                    type="number"
                    name="telefono"
                    className="inputs_formulario"
                    onChange={actualizarState}
                    value={telefono}
                  />
                </div>

                <div className="item_label">
                  <label className="label_formulario">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="inputs_formulario"
                    onChange={actualizarState}
                    value={correo}
                  />
                </div>
              </div>
            </div>

            <div className="cont_radio">
              <label className="titulo_formulario_radio">
                Estoy interesado/a
              </label>
              <div>
                <div className="cntPago">
                  Consulta
                  <input
                    onChange={actualizarState}
                    type="radio"
                    name="consulta"
                    className="inputs_radio"
                    value="consulta"
                    checked={consulta === "consulta"}
                  />
                </div>

                <div className="cntPago">
                  Reserva
                  <input
                    onChange={actualizarState}
                    type="radio"
                    name="consulta"
                    className="inputs_radio"
                    value="Reserva"
                    checked={consulta === "Reserva"}
                  />
                </div>
              </div>
            </div>

            <div className="contenedor_textArea">
            <label className="label_formulario">Mensaje</label>
              <textarea
                type="text-area"
                name="mensaje"
                className="textarea"
                onChange={actualizarState}
                value={mensaje}
              />
            </div>
          </div>

          <div className="item_botonEnviar">
          <button type="submit" className="btnComprar">
            Enviar
          </button>
          </div>

         
        </form>
      </>
    );
  }
};
export default Contacto;
