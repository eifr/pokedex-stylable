import { memo, useContext } from 'react';
import { getPokemonInfo } from '../../api';
import { PokedexContext } from '../pokedex/Pokedex';
import { classes } from './search.st.css';
import Select from 'react-select';

const Search: React.VFC = memo(() => {
    const { allPokemons, setSelectedPokemon } = useContext(PokedexContext);

    const onPokemonClick = async (pokemonName: string) => {
        const pokemonInfo = await getPokemonInfo(pokemonName);
        if (pokemonInfo) {
            setSelectedPokemon?.(pokemonInfo);
        }
    };

    return (
        <div className={classes.root}>
            <Select
                onChange={(selectedOption) => {
                    if (selectedOption == null) return;
                    void onPokemonClick(selectedOption.value);
                }}
                options={allPokemons?.map(({ name }) => ({ value: name, label: name }))}
            />
        </div>
    );
});

Search.displayName = 'Search';

export default Search;
