/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type React from 'react';
import { useEffect, useState } from 'react';
import { st, classes } from './app.st.css';
import { Header } from './header';
import type { PokemonInfo, PokemonList, PokemonListItem } from './types';

export interface AppProps {
    className?: string;
}


export const App: React.VFC<AppProps> = ({ className }) => {
    const [allPokemons, setAllPokemons] = useState<PokemonInfo[]>([])
    const [loadMore, setLoadMore] = useState<string | null>('https://pokeapi.co/api/v2/pokemon?limit=20');


    async function createPokemonObject(results: PokemonListItem[]) {
        let pokemons: PokemonInfo[] = [];

        await Promise.all(results.map(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data: PokemonInfo = await res.json();
            pokemons = [...pokemons, data]
          }));

        setAllPokemons(currentList => [...currentList, ...pokemons])
        allPokemons.sort((a, b) => a.id - b.id)
    }

    const getAllPokemons = async () => {
        if(!loadMore) return;
        const res = await fetch(loadMore)
        const data: PokemonList = await res.json()

        setLoadMore(data.next)


        await createPokemonObject(data.results)
    }

    // useEffect(() => {
    //     getAllPokemons()
    // }, [])

    useEffect(() => {
      console.log(allPokemons)
    
    }, [allPokemons])
    
    return (
        <main className={st(classes.root, className)}>
            <Header className={classes.header} />
            {/* <button disabled={!loadMore} onClick={getAllPokemons}>Load More Pokemons</button> */}
        </main>
    );
};
