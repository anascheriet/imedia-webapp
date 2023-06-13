export interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    results: IPokemonListResults[];
}



export interface IPokemonListResults {
    name: string;
    url: string;
}



export interface IState {
    pokemons: IPokemonList
}