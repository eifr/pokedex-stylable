import { Stats, TypeOfPokemon } from '../src/types';

export const getPokemonObj = () => {
    return {
        id: 6,
        name: 'charizard',
        height: 17,
        weight: 905,
        sprites: {
            front_default: '',
            other: {
                dream_world: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
                },
            },
        },
        types: [
            {
                slot: 1,
                type: {
                    name: TypeOfPokemon.Fire,
                    url: 'https://pokeapi.co/api/v2/type/10/',
                },
            },
            {
                slot: 2,
                type: {
                    name: TypeOfPokemon.Flying,
                    url: 'https://pokeapi.co/api/v2/type/3/',
                },
            },
        ],
        abilities: [
            {
                ability: {
                    name: 'blaze',
                },
            },
            {
                ability: {
                    name: 'solar-power',
                },
            },
        ],
        moves: [],
        stats: [
            {
                base_stat: 78,
                stat: {
                    name: Stats.Hp,
                },
            },
            {
                base_stat: 84,
                stat: {
                    name: Stats.Attack,
                },
            },
            {
                base_stat: 78,
                stat: {
                    name: Stats.Defense,
                },
            },
            {
                base_stat: 109,
                stat: {
                    name: Stats.SpecialAttack,
                },
            },
            {
                base_stat: 85,
                stat: {
                    name: Stats.SpecialDefense,
                },
            },
            {
                base_stat: 100,
                stat: {
                    name: Stats.Speed,
                },
            },
        ],
    };
};
