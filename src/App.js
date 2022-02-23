
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*El header va a quedar fijo */}
        <header>

          <NavBar />

        </header>
        <main>
          <Routes>

            <Route
              path="/"
              element={<ItemListContainer
              greetings = '¡Bienvenidos a Lumina!'/>}
            />
            <Route
              path='/category/:categoryName'
              element={<ItemListContainer
              greetings = 'Categoria en especifico'/>}/>
            <Route
            path="/producto/:productoId"
            element={<ItemDetailContainer />}
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
