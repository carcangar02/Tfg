import { imagenes } from "../imagenes.js";
import {randomNumber} from "../Logic.js"

const { key, nombre, grupo, img, vida, efectos } = imagenes[randomNumber];
const estiloFondo = {
  backgroundImage: `url(${img})`,
};

export const CartaJuego = () => {
  return (
    <div className="carta" style={estiloFondo}>
      <div className="vida">{vida}</div>
    </div>
  );
};
export const CartaModalInfo = () => {
  return (
    <div className="carta" style={estiloFondo}>
      <div className="vida">3</div>
      <p>textoInfo</p>
    </div>
  );
};
