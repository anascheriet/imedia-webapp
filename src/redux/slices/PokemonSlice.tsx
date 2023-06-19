import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IPokemonList } from '../../components/pokemonList/types';
import { IPokemonDetails } from './../../components/pokemonDetail/types';


export interface IPokemonState {
  pokemons: IPokemonList,
  selectedPokemon: IPokemonDetails
}

export const initialState: IPokemonState = {
  pokemons: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  selectedPokemon: {},
};


export const pokemonSlice: Slice<IPokemonState> = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    unsetPokemon: (state) => {
      state.selectedPokemon = initialState.selectedPokemon;
    },
    setPokemonList: (state, action: PayloadAction<IPokemonList>) => {
      state.pokemons.next = action.payload.next;
      state.pokemons.count = action.payload.count;
      state.pokemons.previous = action.payload.previous;
      state.pokemons.results = [...state.pokemons.results, ...action.payload.results];
    },
    setSelectedPokemon: (state, action: PayloadAction<IPokemonDetails>) => {
      state.selectedPokemon = action.payload;
    },
    fetchPokemonList: (state, action: PayloadAction<string>) => {
      // No need to mutate the state here
    },
  },
});

export const { setPokemonList, setSelectedPokemon, cleanState, unsetPokemon, fetchPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;