import { st, classes } from './pokedexContainer.st.css';
import PokemonInfo from '../pokemon-info/Info';
import Tabs from '../tabs/Tabs';
import { createContext, useEffect, useState } from 'react';
import type {
    PokedexAppContext,
    PokemonInfo as PokemonInfoType,
    PokemonListItem,
} from '../../types';
import Top from './Top';
import { getAllPokemons } from '../../api';

export const PokedexContext = createContext<PokedexAppContext>({
    allPokemons: null,
    selectedPokemon: null,
    setSelectedPokemon: null,
});

const Pokedex = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonListItem[] | null>(null);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonInfoType | null>(null);

    useEffect(() => {
        const getPokemons = async () => {
            const allPokemons = await getAllPokemons();
            setAllPokemons(allPokemons.results);
        };
        void getPokemons();
    }, []);

    return (
        <div className={st(classes.root)}>
            <PokedexContext.Provider
                value={{
                    allPokemons,
                    selectedPokemon,
                    setSelectedPokemon,
                }}
            >
                <div className={st(classes.container)}>
                    <Tabs />
                </div>
                <div className={st(classes.container)}>
                    <Top />
                    <PokemonInfo />
                </div>
            </PokedexContext.Provider>
        </div>
    );
};

export default Pokedex;
