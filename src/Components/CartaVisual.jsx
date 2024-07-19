import React from 'react'
import {imagenes} from '../imagenes.js'




export const CartaJuego = ()=>{
    const rutaIMG = imagenes[0].img
    const estiloFondo ={
        backgroundImage : `url(${rutaIMG})`,
    }
  

    return(
    <div  className= "carta" style={estiloFondo}>
        <div className="vida">
        3
        </div>
    </div>
    )
}
export const CartaModalInfo = ()=>{

return(
   <div className="carta" >
     <div className="vida">
        3
     </div>
    <p>textoInfo</p>
   </div> 
)

}