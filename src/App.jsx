import './App.css'
import { CartaJuego, CartaModalInfo } from './Components/CartaVisual.jsx'





function App() {
 
  return (
    <main className='board'>
    <section className='section1'>
      <aside className='puntos'></aside>
      <aside className='pasarTurno'></aside>
      <aside className='puntos'></aside>
    </section>
    <section className='section2'>
     <div className='cartasJugadasAdv'></div>
     <div className='cartasJugadasPlyer'></div>
     <div className='cartasPlyer'></div>
    </section>
    <section className='section3'>
      <aside className='rondas'></aside>
      <aside className='rondas'></aside>
      <aside className='turnos'></aside>
    </section>
    </main>
  
    
  )
}

export default App
