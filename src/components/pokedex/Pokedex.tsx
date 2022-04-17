import { classes } from './pokedexContainer.st.css';
import PokemonInfo from '../pokemon-info/Info';
import Tabs from '../tabs/Tabs';
import { createContext, memo, useEffect, useState } from 'react';
import { getAllPokemonsList } from '../../helpers';
import type {
    PokedexAppContext,
    PokemonInfo as PokemonInfoType,
    PokemonListItem,
} from '../../types';

export const PokedexContext = createContext<PokedexAppContext>({
    allPokemons: null,
    selectedPokemon: null,
    setSelectedPokemon: null,
});

const Pokedex = memo(() => {
    const [allPokemons, setAllPokemons] = useState<PokemonListItem[] | null>(null);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonInfoType | null>(null);

    useEffect(() => {
        getAllPokemonsList()
            .then((pokemonsList) => {
                setAllPokemons(pokemonsList);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <div className={classes.root}>
            <PokedexContext.Provider
                value={{
                    allPokemons,
                    selectedPokemon,
                    setSelectedPokemon,
                }}
            >
                <div className={classes.container}>
                    <Tabs />
                </div>
                <div className={classes.container}>
                    <PokemonInfo />
                </div>
            </PokedexContext.Provider>
        </div>
    );
});

Pokedex.displayName = 'Pokedex';

export default Pokedex;
