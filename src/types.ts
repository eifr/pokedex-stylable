export type PokemonListItem = {
    name: string,
    url: string
}

export type PokemonList = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonListItem[]
}

// export type Ability = {
    
// }

export type PokemonInfo = {
    id: number,
    name: string,
}