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

export const getPokemonList = () => {
    return [
        {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
        {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
        },
        {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
        {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
        },
        {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/',
        },
        {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/',
        },
        {
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon/8/',
        },
        {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon/9/',
        },
        {
            name: 'caterpie',
            url: 'https://pokeapi.co/api/v2/pokemon/10/',
        },
        {
            name: 'metapod',
            url: 'https://pokeapi.co/api/v2/pokemon/11/',
        },
        {
            name: 'butterfree',
            url: 'https://pokeapi.co/api/v2/pokemon/12/',
        },
        {
            name: 'weedle',
            url: 'https://pokeapi.co/api/v2/pokemon/13/',
        },
        {
            name: 'kakuna',
            url: 'https://pokeapi.co/api/v2/pokemon/14/',
        },
        {
            name: 'beedrill',
            url: 'https://pokeapi.co/api/v2/pokemon/15/',
        },
        {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/',
        },
        {
            name: 'pidgeotto',
            url: 'https://pokeapi.co/api/v2/pokemon/17/',
        },
        {
            name: 'pidgeot',
            url: 'https://pokeapi.co/api/v2/pokemon/18/',
        },
        {
            name: 'rattata',
            url: 'https://pokeapi.co/api/v2/pokemon/19/',
        },
        {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon/20/',
        },
        {
            name: 'spearow',
            url: 'https://pokeapi.co/api/v2/pokemon/21/',
        },
        {
            name: 'fearow',
            url: 'https://pokeapi.co/api/v2/pokemon/22/',
        },
        {
            name: 'ekans',
            url: 'https://pokeapi.co/api/v2/pokemon/23/',
        },
        {
            name: 'arbok',
            url: 'https://pokeapi.co/api/v2/pokemon/24/',
        },
        {
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon/25/',
        },
    ];
};
