
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer
        greetings = '¡Bienvenidos a Lumina!'/>
        <ItemDetailContainer />
      </main>

    </div>
  );
}

export default App;
