import Item from "./Item";

const ItemList = ({ sesiones }) => {



    return (
      <>
        {sesiones.map((item) => (
          <Item key={item.id} sesiones={item} />
        ))}
      </>
    );
  
}

export default ItemList;
