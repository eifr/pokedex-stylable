import { memo, useContext, useEffect, useState } from 'react';
import { classes } from './card-list.st.css';
import { PokedexContext } from '../pokedex/Pokedex';
import Card from './card/Card';
import type { PokemonInfo } from '../../types';
import { createPokemonObject, NUM_OF_CARDS } from '../../helpers';

const CardList = memo(() => {
    const [detailedPokemonList, setDetailedPokemonList] = useState<PokemonInfo[]>([]);
    const [cardsToFetch, setCardsTofetch] = useState(NUM_OF_CARDS);
    const { allPokemons, setSelectedPokemon } = useContext(PokedexContext);

    function loadMore() {
        setCardsTofetch((currentNumber) => currentNumber + NUM_OF_CARDS)
    }

    useEffect(() => {
        if (allPokemons === null || allPokemons.length === 0) return;
        createPokemonObject(allPokemons, cardsToFetch).then((pokemons) => {
            setDetailedPokemonList((currentList) => [...currentList, ...pokemons]);
        }).catch((error) => {
            alert(error)
        });
    }, [allPokemons, cardsToFetch]);

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
                            onClick={setSelectedPokemon !== null ? () => setSelectedPokemon(pokemon) : undefined}
                        />
                    );
                })}
            </div>
            <button
                className={classes.loadMoreBtn}
                onClick={loadMore}
            >
                Load More
            </button>
        </div>
    );
});

CardList.displayName = 'CardList';

export default CardList;
