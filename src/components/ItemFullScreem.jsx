import { useParams } from "react-router";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GaleriaFullScreem = () => {
  const { id } = useParams();

  const [Selec, setSelec] = useState([]);

  const obtenerDatos = async () => {
    const resp = await fetch(
      `https://617c26acd842cf001711c27c.mockapi.io/galeria/${id}`
    );
    const data = await resp.json();
    setSelec(data);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <Fragment>
     
        <div className="fullScreem">
          <div className="pic2">

            <Link to="/galeria">
              <div className="material-icons close"> close</div>
            </Link>
            <img className="pic" src={Selec.Imagenes} />
            
          </div>
        </div>
    
    </Fragment>
  );
};

export default GaleriaFullScreem;
