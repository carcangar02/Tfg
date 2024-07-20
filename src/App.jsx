import './App.css'
import { CartaJuego, CartaModalInfo } from './Components/CartaVisual.jsx'





function App() {
 
  return (
    <main className='board'>
    <section className='section1'>
      <div className='iconosSection1'>
        <aside className='puntos'></aside>
        <button className='pasarTurno'>PASAR TURNO</button>
        <aside className='puntos'></aside>
      </div>
    </section>
    <section className='section2'>
     <div className='cartasJugadasAdv'></div>
     <div className='cartasJugadasPlyer'></div>
     <div className='cartasPlyer'>
      <CartaJuego/>
      <CartaJuego/>
      <CartaJuego/>
     </div>
    </section>
    <section className='section3'>
      <div className='iconosSection3'>
        <aside className='rondas'></aside>
        <aside className='rondas'></aside>
      </div>
      <aside className='turnos'></aside>
    </section>
    </main>
  
    
  )
}

export default App
