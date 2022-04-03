import type { PokemonInfo, PokemonListItem } from './types';

export const getAllPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126');
    return (await res.json()) as { results: PokemonListItem[] };
};

export const getPokemonInfo = async (pokemonName: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return (await res.json()) as PokemonInfo;
};
