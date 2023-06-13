import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemonList } from '../../components/pokemonList/types';
import { IPokemonDetails } from './../../components/pokemonDetail/types';

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: {
      results: {},
      count: 0,
      next: "",
      previous: ""
    },
    selectedPokemon: {},
  },
  reducers: {
    setPokemonList: (state, action: PayloadAction<IPokemonList>) => {
      state.pokemons = action.payload;
    },
    setSelectedPokemon: (state, action:PayloadAction<IPokemonDetails>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemonList, setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
//export type PokemonState = ReturnType<typeof pokemonSlice>
