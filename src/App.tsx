import './styles/app.scss';
import { Nav } from './components/Nav';
import { PokemonList } from './components/pokemonList/PokemonList';

function App() {
  return (
    <div className="App">
     <Nav />
     <PokemonList/>
    </div>
  );
}

export default App;
