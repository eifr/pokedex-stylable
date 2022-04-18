import { getPokemonInfo, getPokemonList } from './api';
import type { PokemonInfo, PokemonListItem } from './types';

export async function fetchedDetailedPokemons(
    pokemonsToFetch: PokemonListItem[]
): Promise<PokemonInfo[]> {
    const fetchedPokemons = await Promise.all(
        pokemonsToFetch.map((pokemon) => {
            return getPokemonInfo(pokemon.name);
        })
    );

    const pokemonsInfo = await Promise.all<PokemonInfo>(
        fetchedPokemons.map((pokemon) => pokemon.json())
    );

    pokemonsInfo.sort((a, b) => a.id - b.id);

    return pokemonsInfo;
}

export async function getAllPokemonsList(manNumberOfPokemons: number): Promise<PokemonListItem[]> {
    const allPokemons = await getPokemonList(manNumberOfPokemons);
    const pokemonList = (await allPokemons.json()) as { results: PokemonListItem[] };

    return pokemonList.results;
}
