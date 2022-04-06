export type PokedexAppContext = {
    allPokemons: PokemonListItem[] | null;
    selectedPokemon: PokemonInfo | null;
    setSelectedPokemon: ((value: PokemonInfo) => void) | null;
};

export type PokemonListItem = {
    name: string;
    url: string;
};

export enum TypeOfPokemon {
    Normal = 'normal',
    Fire = 'fire',
    Water = 'water',
    Electric = 'electric',
    Grass = 'grass',
    Ice = 'ice',
    Fighting = 'fighting',
    Poison = 'poison',
    Ground = 'ground',
    Flying = 'flying',
    Psychic = 'psychic',
    Bug = 'bug',
    Rock = 'rock',
    Ghost = 'ghost',
    Dragon = 'dragon',
    Dark = 'dark',
    Steel = 'steel',
    Fairy = 'fairy',
}

type TypesKeys = keyof typeof TypeOfPokemon;
export type PokemonTypes = typeof TypeOfPokemon[TypesKeys];

export enum Stats {
    Hp = 'hp',
    Attack = 'attack',
    Defense = 'defense',
    SpecialAttack = 'special-attack',
    SpecialDefense = 'special-defense',
    Speed = 'speed',
}

type StatsKeys = keyof typeof Stats;
export type StatsType = typeof Stats[StatsKeys];

export type Ability = {
    ability: {
        name: string;
    };
};

export type Move = {
    move: {
        name: string;
    };
};

export type Stat = {
    base_stat: number;
    stat: {
        name: StatsType;
    };
};

type PokemonType = {
    slot: number;
    type: {
        name: PokemonTypes;
        url: string;
    };
};

export type PokemonInfo = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
    types: PokemonType[];
    abilities: Ability[];
    moves: Move[];
    stats: Stat[];
};
