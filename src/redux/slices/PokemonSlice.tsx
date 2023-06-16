import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IPokemonList } from '../../components/pokemonList/types';
import { IPokemonDetails } from './../../components/pokemonDetail/types';


interface IPokemonState {
  pokemons: IPokemonList,
  selectedPokemon: IPokemonDetails
}

const initialState: IPokemonState = {
  pokemons: {
    results: [],
    count: 0,
    next: "",
    previous: "",
  },
  selectedPokemon: {},
};


export const pokemonSlice: Slice<IPokemonState> = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<IPokemonList>) => {
      state.pokemons.next = action.payload.next;
      state.pokemons.count = action.payload.count;
      state.pokemons.previous = action.payload.previous;
      state.pokemons.results = [...state.pokemons.results, ...action.payload.results];
    },
    setSelectedPokemon: (state, action: PayloadAction<IPokemonDetails>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemonList, setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;