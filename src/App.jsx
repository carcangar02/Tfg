import "./App.css";
import { useEffect, useState } from "react";
import {CartaModalInfo,cartasDisplay,cartasDisplayJugadas, CartaJuegoJugada} from "./Components/CartaVisual.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [displayJugadas,setDisplayjugadas] = useState(cartasDisplayJugadas);
  const [display, setDisplay] = useState(cartasDisplay);
  const [idList,setIdList] = useState(undefined);
  useEffect(()=>{
    const divSelector = document.querySelectorAll(".carta");
    const divSelectorCopia = [...divSelector].map(div=>div.id);
    setIdList(divSelectorCopia)
  },[display]);
  
  const handleDragDrop = (results) =>{
  
    const {source, destination} = results;
    


    if(!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index) return;

    if(source.droppableId===destination.droppableId && source.index!=destination.index){
      const reorderDisplay = [...display];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedDisplay] = reorderDisplay.splice(sourceIndex, 1);
      reorderDisplay.splice(destinationIndex, 0, removedDisplay);
      return setDisplay(reorderDisplay)
    }
    if(source.droppableId!=destination.droppableId){
      const reorderDisplayBoard = [...display]
      const reorderJugadasBoard = [...displayJugadas]
      const sourceIndexBoard = source.index;
      const destinationIndexBoard = destination.index;
      const copiaIndex = source.index
     
      const indiceFinal = idList[copiaIndex]//llega hasta aqui
      console.log(idList)
      console.log(copiaIndex)
      console.log(indiceFinal)
      const constructoCarta = [
        {
          id:destination.index,
          contenido: <CartaJuegoJugada indicesCartaDisplayDragged={indiceFinal}/>
        }
      ]
      reorderDisplayBoard.splice(sourceIndexBoard,1)
      reorderJugadasBoard.splice(destinationIndexBoard,0,constructoCarta)
      



      return setDisplayjugadas(reorderJugadasBoard),setDisplay(reorderDisplayBoard)
    }
  };
  
  return (
    <main className="board">
      <section className="section1">
        <div className="iconosSection1">
          <aside className="puntos"></aside>
          <button className="pasarTurno">PASAR TURNO</button>
          <aside className="puntos"></aside>
        </div>
      </section>
      <section className="section2">
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className="cartasJugadasAdv"></div>
          <Droppable droppableId="destino" type="group" direction="horizontal">

            {(provided) => (

              <div className="cartasJugadasPlyer"{...provided.droppableProps}ref={provided.innerRef}>

                {displayJugadas.map((cartaJugada)=>(
                  <div>
                    {cartaJugada.contenido}
                  </div>))}
                  
            </div>
            )}
          </Droppable>
          <Droppable droppableId="origen" type="group" direction="horizontal">

            {(provided) => (
              <div className="cartasPlyer" {...provided.droppableProps}
              ref={provided.innerRef}>

                {display.map((carta,index) => (
                  <Draggable draggableId={carta.id} key={carta.id} index={index}>
                      {(provided)=>(
                        <div className="agarra" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>

                         {carta.contenido}

                        </div>)}
                  </Draggable>
                ))}

              </div>
            )}

          </Droppable>
        </DragDropContext>
      </section>
      <section className="section3">
        <div className="iconosSection3">
          <aside className="rondas"></aside>
          <aside className="rondas"></aside>
        </div>
        <aside className="turnos"></aside>
      </section>
    </main>
  );
}

export default App;
