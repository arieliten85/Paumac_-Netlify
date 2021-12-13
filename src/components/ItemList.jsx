import Item from "./Item";

const ItemList = ({ sesiones }) => {
  if (sesiones.length === 0) {
    return (
      <div className="contenedorLOAD" >
        <p className="loading"> Cargando...</p>
      </div>
    );
  } else {
    return (
      <>
        {sesiones.map((item) => (
          <Item key={item.id} sesiones={item} />
        ))}
      </>
    );
  }
};

export default ItemList;
