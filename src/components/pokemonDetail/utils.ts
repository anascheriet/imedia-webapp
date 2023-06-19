import { IStatsList, IPokemonDetails } from './types';



export const getStat = (pokemon: IPokemonDetails, statName: string) => {
    return pokemon?.stats?.filter(el => el.stat.name === statName)[0]
        .base_stat;
};

export const preparePokemonStatList = (pokemon: IPokemonDetails) => {
    return [
        { statName: 'Weight', value: pokemon?.weight },
        { statName: 'Height', value: pokemon?.height },
        { statName: 'HP', value: getStat(pokemon, 'hp') },
        { statName: 'Attack', value: getStat(pokemon, 'attack') },
        { statName: 'Defense', value: getStat(pokemon, 'defense') },
        { statName: 'Speed', value: getStat(pokemon, 'speed') },
        {
            statName: 'Types',
            value: pokemon?.types
                ?.map(el => el.type.name)
                .join(', '),
        },
    ];
}
export const calculatePokemonRatingOutOf5 = (statsList: IStatsList[]) => {
    const ratingStats = statsList.filter(
        (stat) => !["Types", "Weight", "Height"].includes(stat.statName)
    );
    const avgOutOf100 = ratingStats.reduce((acc, stat) => {
        if (typeof stat.value === 'number') {
            return acc + stat.value;
        } else if (typeof stat.value === 'string') {
            return acc + parseFloat(stat.value);
        } else {
            return acc;
        }
    }, 0) / ratingStats.length;

    const equivalentOutOf5 = ((avgOutOf100 / 100) * 5).toFixed(2);
    return equivalentOutOf5;
}


export const capitalizeFirstLetter = (value?: string): string => {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
  };
  