import type { PokemonInfo, PokemonListItem } from './types';

export const getAllPokemons = async (): Promise<{ results: PokemonListItem[] }> => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126');
        return (await res.json()) as { results: PokemonListItem[] };
    } catch {
        return { results: [] };
    }
};

export const getPokemonInfo = async (pokemonName: string): Promise<PokemonInfo | null> => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return (await res.json()) as PokemonInfo;
    } catch {
        return null;
    }
};
