export function getPokemonList(numberOfPokemons:number): Promise<Response>{
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemons}`);
}

export function getPokemonInfo(pokemonName: string): Promise<Response> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
}

