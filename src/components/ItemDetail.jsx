import { contexto } from "../UseContext/CardContxt";
import { useContext } from "react";

import { useHistory } from "react-router-dom";
import Contador from "./Contador";

const ItemDetail = ({ producto, id }) => {
  const { push } = useHistory();

  const { agregarProducto } = useContext(contexto);

  const addInfo = (cantidad) => {
    agregarProducto(cantidad, producto, id);
    console.log(id);

    push("/cart");
  };

  return (
    <>
      <li className="contenedor_itemDetail">
        <h2 className="tituloDetalles">{producto.titulo}</h2>
        <h3>{producto.subtitulo}</h3>
        <p>{producto.descripcion}</p>

        <h4>¿Cuándo se realiza la sesión? </h4>
        <p>
          Esta sesión se realiza entre los 10 y 11 meses de vida de tu bebé.
          Realizamos la sesión mínimo un mes antes del evento, para así tener el
          tiempo necesario para que puedas llevar las fotografías de tu bebé a
          productos como foto libros, murales, invitaciones, foto imanes, para
          guardar de recuerdo o regalar. Por ello es importante reserves con 1 o
          2 meses de antelación. CONSULTÁ DISPONIBILIDAD si estas sobre la fecha
          .{" "}
        </p>

        <h4>RESERVA ¿Cuándo y cómo ? </h4>
        <p>
          Debes contactarte para realizar la reserva de un turno dos meses antes
          preferentemente o consultar disponibilidad, para coordinar fecha y
          horario de la sesión,una vez realizada la compra del producto
        </p>

        <h4>LA SESIÓN ¿Cómo se desarrolla ?</h4>
        <p>
          La sesión se realiza en nuestro estudio en Lanús, ambientado y
          climatizado para fotografía de familia y especialmente para bebés y
          niños. El desarrollo de la sesión dependerá del ritmo del bebé, y
          dinámica propuesta por la fotógrafa. La ambientación podrá ser elegida
          por los papás, siempre dentro de nuestras propuestas publicadas aquí
          ,o consultando por nuevas propuestas, el vestuario dependerá de la
          talla del bebé y disponibilidad al momento de la sesión (contamos con
          vestuario ,consultar ) La sesión tiene una duración de 30 a 60 minutos
          dependiendo el paquete contratado . (leer Protocolo COVID'19){" "}
        </p>

        <h4>FOTOS DIGITALES Y PRODUCTOS ¿Cuándo se entrega ?</h4>
        <p>
          Luego de realizada la sesión, las fotografías digitales, que incluya
          el paquete contratado, serán seleccionadas por la fotógrafa, acorde a
          las variantes obtenidas durante el desarrollo de la misma, (no se
          entregan archivos en crudo) Recibirás las fotografías ya editadas
          luego de 7 días hábiles posteriores a la sesión , para que elijas
          aquellas con las que realizaremos los foto productos incluidos o
          adicionales, contratados. Los foto productos estarán disponibles para
          retirar pasados los 10 días hábiles posteriores a informar tu elección
          . Las fotografías digitales, que incluya el paquete contratado, serán
          enviadas mediante un link de descarga luego de retirados los foto
          productos solicitados o en un plazo máximo de un mes.{" "}
        </p>
      </li>

      <li key={id} className="contenedor_compra_detalle">
        <div className="contenerdor_img_compra">
          <img className="img_compra" src={producto.imagen} />
        </div>
        <div className="contenedor_compra_info">
          <div className="texto_compra">
            Sesion de fotos : " {producto.titulo} "
          </div>
          <p className="contenedor_texto_compra">
            Precio : $ <div className="texto_compra">{producto.precio} </div>
          </p>

          <Contador addInfo={addInfo} />
        </div>
      </li>
    </>
  );
};
export default ItemDetail;
