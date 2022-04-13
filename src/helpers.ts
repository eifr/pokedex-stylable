import { getPokemonInfo, getPokemonList } from './api';
import type { PokemonInfo, PokemonListItem } from './types';

export const NUM_OF_CARDS = 20;
export const MAX_NUM_OF_POKEMONS = 1126;

export async function createPokemonObject(
    allPokemons: PokemonListItem[],
    detailedListLength: number
): Promise<PokemonInfo[]> {
    const currentFetch =
        allPokemons?.slice(
            detailedListLength - NUM_OF_CARDS,
            Math.min(detailedListLength, MAX_NUM_OF_POKEMONS)
        ) ?? [];

    let pokemonsInfo;

    try {
        const fetchedPokemons = await Promise.all(
            currentFetch.map((pokemon) => {
                return getPokemonInfo(pokemon.name);
            })
        );

        pokemonsInfo = await Promise.all<PokemonInfo>(
            fetchedPokemons.map((pokemon) => pokemon.json())
        );

        pokemonsInfo.sort((a, b) => a.id - b.id);
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't load pokemons");
    }
    return pokemonsInfo;
}

export async function getAllPokemonsList() {
    let pokemonList:{results:PokemonListItem[]};
    try {
        const allPokemons = await getPokemonList(MAX_NUM_OF_POKEMONS);
        pokemonList = await allPokemons.json() as {results:PokemonListItem[]};
        
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't load pokemons");
    }
    return pokemonList.results;
}
