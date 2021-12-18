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
          <div class="material-icons navigate_next "> navigate_next</div>
            Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
