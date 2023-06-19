import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import appApi from './../api/axios';
import { setPokemonList } from 'src/redux/slices/PokemonSlice';

function* fetchPokemonList(action: PayloadAction<string>): Generator<any, void, any> {
    try {
        const response = yield appApi.get(action.payload);
        yield put(setPokemonList(response.data));
    } catch (error) {
        // Handle error if needed
    }
}

export function* pokemonSaga() {
    yield takeLatest('pokemon/fetchPokemonList', fetchPokemonList);
}