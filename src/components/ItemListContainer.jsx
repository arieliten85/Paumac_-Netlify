import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "./firebase";

const ItemListContainer = () => {
  const [sesiones, setSesiones] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("sesiones");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setSesiones(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);

  return (
    <>
      <h2>seciones</h2>

      <div className="contenedorSesiones">
        <ItemList sesiones={sesiones} />
      </div>
    </>
  );
};

export default ItemListContainer;
