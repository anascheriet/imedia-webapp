import './styles/app.scss';
import { CSSProperties, useState } from "react";
import { Nav } from './components/Nav';
import { PokemonList } from './components/pokemonList/PokemonList';

import { Box, CircularProgress } from '@mui/material';
import { BounceLoader, CircleLoader } from 'react-spinners';

function App() {

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [color, setColor] = useState("#ffffff");
  return (
    <div className="App">
      <Nav />
      <PokemonList />
    {/*   <BounceLoader
        color={color}
        loading={true}
        cssOverride={override} 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
}

export default App;
