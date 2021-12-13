import img from "./img2/promoNavidad.jpg";

const Promocion = () => {
  return (
    <div className="ContenedorRedes">
      <p>Sesiones Navideñas 2021 </p>
      <img className="img_navidad" src={img} />
      <p>Consulta Aquí</p>
    </div>
  );
};

export default Promocion;
