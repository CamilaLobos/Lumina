
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greetings='¡Bienvenidos a Lumina!'/>
      </main>

    </div>
  );
}

export default App;
