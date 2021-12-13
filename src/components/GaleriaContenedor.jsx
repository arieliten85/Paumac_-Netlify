import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Galeria = () => {
  const [service, setService] = useState([]);

  const obtenerDatos = async () => {
    const resp = await fetch(
      "https://617c26acd842cf001711c27c.mockapi.io/galeria"
    );
    const data = await resp.json();
    setService(data);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <Fragment>
      {service.map((itemProducto) => (
        <li key={itemProducto.id} className="cardGaleria">
          <Link to={`/ImgMaxim/${itemProducto.id}`}>
            <dir className="contenedorImgGaleria">
              <img className="imgGaleria" src={itemProducto.Imagenes} />
            </dir>
          </Link>
        </li>
      ))}
    </Fragment>
  );
};

export default Galeria;
