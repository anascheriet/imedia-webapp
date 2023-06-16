import { pokemonSlice } from "./slices/PokemonSlice";
import { configureStore } from "@reduxjs/toolkit";







export default configureStore({
    reducer: pokemonSlice.reducer
});
