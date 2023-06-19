import './styles/app.scss';
import { Nav } from './components/Nav';
import { PokemonList } from './components/pokemonList/PokemonList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <ToastContainer position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ top: '7em' }} />
      <Nav />
      <PokemonList />
    </div>
  );
}

export default App;
