import { imagenes } from "../imagenes.js";
import { randomNumber, min, max } from "../Logic.js";




export const CartaJuego = () => {
  const indiceImagenes = randomNumber(min, max)
  const { key, nombre, grupo, img, vida, efectos } = imagenes[indiceImagenes];

  const estiloFondo = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div id={key} key={key} className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
    </div>
  );
};
export const CartaJuegoJugada = (indicesCartaDisplayDragged) => {
  const indiceImagenes = {indicesCartaDisplayDragged}
  const { key, nombre, grupo, img, vida, efectos } = imagenes[indiceImagenes];

  const estiloFondo = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div id={key} key={key} className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
    </div>
  );
};





export const CartaModalInfo = () => {
  const indiceImagenes = randomNumber(min, max)
  const { key, nombre, grupo, img, vida, efectos } = imagenes[indiceImagenes];


  const estiloFondo = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div id={key} key={key} className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
      <div className="info">
        <p>{nombre}</p>
        <p>{grupo}</p>
        <p>{efectos}</p>
      </div>
    </div>
  );
};



export const cartasDisplay = [
  {
    id: "0",
    contenido: <CartaJuego />,
  },
  {
    id: "1",
    contenido: <CartaJuego />,
  },
  {
    id: "2",
    contenido: <CartaJuego />,
  },
];

export const cartasDisplayJugadas = [
  {
   id: "0"
   
  },
  { 
   id: "1" 
  },
  {
   id: "2"
  },
];