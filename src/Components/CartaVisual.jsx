import { imagenes } from "../imagenes.js";
import {randomNumber,min,max} from "../Logic.js"


export const CartaJuego = () => {
  
const { key,img,vida,} = imagenes[randomNumber(min,max)];

const estiloFondo = {
  backgroundImage: `url(${img})`,
};

  
  return (
    <div key={key} className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
    </div>
  );
};
export const CartaModalInfo = () => {
  
const { key, nombre, grupo, img, vida, efectos } = imagenes[randomNumber(min,max)];

const estiloFondo = {
  backgroundImage: `url(${img})`,
};

  return (
    <div key={key} className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
      <div className="info">
        <p>{nombre}</p>
        <p>{grupo}</p>
        <p>{efectos}</p>
      </div>
      
    </div>
  );
};
