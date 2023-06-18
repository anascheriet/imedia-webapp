import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PokemonList } from './PokemonList';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
    pokemons: {
        results: [
            { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
            { name: 'Charizard', url: 'https://pokeapi.co/api/v2/pokemon/6' },
        ],
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=20',
    },
});

test('renders the PokemonList component', () => {
    render(
        <Provider store={store}>
            <PokemonList />
        </Provider>
    );

    // Expect the component to be rendered
    expect(screen.getByTestId('pokemon-list')).toBeInTheDocument();

    // Expect the list of Pokemon items to be rendered
    expect(screen.getByTestId('pokemon-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('pokemon-item-1')).toBeInTheDocument();
});
