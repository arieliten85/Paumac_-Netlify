import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "./firebase";

const ItemCardDetails = () => {
  const [productSelec, setSelec] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const collection = db.collection("sesiones");
    const query = collection.doc(id);
    const promesa = query.get();

    promesa
      .then((documento) => {
        console.log("Consulta exitosa");
        const data = documento.data();
        setSelec(data);
      })
      .catch(() => {
        console.log("Hubo un error");
      });
  }, [id]);

  return (
    <>
      <div className="ContProdSelec">
        <ItemDetail producto={productSelec} id={id} />
      </div>
    </>
  );
};

export default ItemCardDetails;
