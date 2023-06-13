export interface IPokemonDetails {
    weight?: number;
    height?: number;
    name?: string;
    sprites?: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    stats?: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    types?: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  }

  export interface IStatsList {
    statName: string;
    value?: number | string;
  }


  export interface IState {
    selectedPokemon: IPokemonDetails
}