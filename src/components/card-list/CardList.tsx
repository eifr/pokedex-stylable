import { memo, useContext, useEffect, useState } from 'react';
import { classes } from './card-list.st.css';
import { PokedexContext } from '../pokedex/Pokedex';
import Card from './card/Card';
import { getPokemonInfo } from '../../api';
import type { PokemonInfo } from '../../types';

const NUM_OF_CARDS = 20;
const MAX_NUM_OF_POKEMONS = 1126;

const CardList: React.VFC = memo(() => {
    const [detailedPokemonList, setDetailedPokemonList] = useState<PokemonInfo[]>([]);
    const { allPokemons, setSelectedPokemon } = useContext(PokedexContext);

    async function createPokemonObject(numOfCards: number) {
        const currentFetch = allPokemons?.slice(
            detailedPokemonList.length,
            Math.min(detailedPokemonList.length + numOfCards, MAX_NUM_OF_POKEMONS)
        );

        let pokemons: PokemonInfo[] = [];

        if (!currentFetch) return;
        await Promise.all(
            currentFetch?.map(async (pokemon) => {
                const data = await getPokemonInfo(pokemon.name);
                if (data !== null) {
                    pokemons = [...pokemons, data];
                }
            })
        );

        pokemons.sort((a, b) => a.id - b.id);
        setDetailedPokemonList((currentList) => [...currentList, ...pokemons]);
    }

    async function loadMore() {
        await createPokemonObject(NUM_OF_CARDS);
    }

    useEffect(() => {
        void createPokemonObject(NUM_OF_CARDS);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPokemons]);

    return (
        <div className={classes.root}>
            <div className={classes.listContainer}>
                {detailedPokemonList.map((pokemon) => {
                    const { name, sprites, types } = pokemon;
                    return (
                        <Card
                            key={name}
                            name={name}
                            image={sprites.front_default}
                            type={types[0].type.name}
                            onClick={() => setSelectedPokemon?.(pokemon)}
                        />
                    );
                })}
            </div>
            <button
                className={classes.loadMoreBtn}
                onClick={() => {
                    void loadMore();
                }}
            >
                Load More
            </button>
        </div>
    );
});

CardList.displayName = 'CardList';

export default CardList;
