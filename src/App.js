import NavBar from './components/NavBar';
import FotoCarrito from './imagenes/carrito.svg';
import CardWidget from './components/CardWidget';
import './NavBar.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardWidget imgSrc = {FotoCarrito} />
    </div>
  );
}

export default App;
