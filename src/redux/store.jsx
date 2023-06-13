import { combineReducers } from "redux";
import { pokemonSlice } from "./slices/PokemonSlice";
import storage from 'redux-persist/lib/storage'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";

//const rootReducer = combineReducers({
//  pokemon: pokemonSlice,
//});


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const persistedReducer = persistReducer(persistConfig, pokemonSlice.reducer)



export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
