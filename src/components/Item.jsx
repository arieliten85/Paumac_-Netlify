import { Link } from "react-router-dom";

const Item = ({ sesiones }) => {
  return (
    <div className="card">
      <dir className="contenedorImg">
        <img className="imgSeciones" src={sesiones.imagen} />
      </dir>

      <div className="info_titulo_seciones">
        <h4 className="tituloCard">{sesiones.titulo}</h4>
      </div>

      <div className="item_Vermas">
        <Link to={`/sesiones/${sesiones.id}`}>
       
          <button className="verMas">
          <div class="material-icons arrow_back_ios  arrow"> arrow_back_ios</div>
            Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
