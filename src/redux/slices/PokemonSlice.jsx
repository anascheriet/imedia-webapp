import { createSlice } from "@reduxjs/toolkit";
import { IPokemonList } from './../../components/pokemonList/types';




export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: IPokemonList =  [],
    selectedPokemon: {},
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemons, setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
