import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { classes } from './card-list.st.css';
import { PokedexContext } from '../pokedex/Pokedex';
import Card from './card/Card';
import { fetchedDetailedPokemons } from '../../helpers';
import type { PokemonInfo } from '../../types';

export const NUM_OF_CARDS = 20;

const CardList = memo(() => {
    const [detailedPokemonList, setDetailedPokemonList] = useState<PokemonInfo[]>([]);
    const { allPokemons, setSelectedPokemon } = useContext(PokedexContext);

    const loadMoreHandler = useCallback(() => {
        if (allPokemons === null || allPokemons.length === 0) {
            return;
        }
        fetchedDetailedPokemons(
            allPokemons.slice(detailedPokemonList.length, detailedPokemonList.length + NUM_OF_CARDS)
        )
            .then((pokemons) => {
                setDetailedPokemonList((currentList) => [...currentList, ...pokemons]);
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    }, [allPokemons, detailedPokemonList]);

    useEffect(() => {
        loadMoreHandler();
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
                            onClick={
                                setSelectedPokemon !== null
                                    ? () => setSelectedPokemon(pokemon)
                                    : undefined
                            }
                        />
                    );
                })}
            </div>
            <button className={classes.loadMoreBtn} onClick={loadMoreHandler}>
                Load More
            </button>
        </div>
    );
});

CardList.displayName = 'CardList';

export default CardList;
