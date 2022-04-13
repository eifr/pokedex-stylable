import { memo, useContext } from 'react';
import { getPokemonInfo } from '../../api';
import { PokedexContext } from '../pokedex/Pokedex';
import { classes } from './search.st.css';
import Select from 'react-select';
import type { PokemonInfo } from '../../types';

const Search: React.VFC = memo(() => {
    const { allPokemons, setSelectedPokemon } = useContext(PokedexContext);

    const onPokemonSelect = (pokemonName: string) => {
        getPokemonInfo(pokemonName)
            .then((pokemon) => {
                return pokemon.json();
            })
            .then((pokemonInfo: PokemonInfo) => {
                setSelectedPokemon?.(pokemonInfo);
            })
            .catch((e) => {
                console.log(e);
                alert("Couldn't load pokemon");
            });
    };

    return (
        <div className={classes.root}>
            <Select
                onChange={(selectedOption) => {
                    if (selectedOption == null) return;
                    onPokemonSelect(selectedOption.value);
                }}
                options={allPokemons?.map(({ name }) => ({ value: name, label: name }))}
            />
        </div>
    );
});

Search.displayName = 'Search';

export default Search;
