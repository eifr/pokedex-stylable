import { classes, vars } from './detailsWrapper.st.css';
import { POKEMON_TYPE_COLORS } from '../../../colors/pokemonTypeColors';
import logo from '../../../../public/assets/International_Pokémon_logo.svg.png';
import { memo } from 'react';
import type { PokemonInfo } from '../../../types';

const DEFAULT_TYPE = 'water';

interface SelectedPokemon {
    selectedPokemon: PokemonInfo | null;
    viewToDisplay: ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => JSX.Element;
}

const DetailsWrapper = memo<SelectedPokemon>(({ selectedPokemon, viewToDisplay }) => {
    const { types } = selectedPokemon || {};
    const pokemonType = types?.[0].type.name ?? DEFAULT_TYPE;

    return (
        <div
            style={{ [vars.typeColor]: POKEMON_TYPE_COLORS[pokemonType] }}
            className={classes.root}
        >
            {selectedPokemon ? (
                <div className={classes.details}>{viewToDisplay({ selectedPokemon })}</div>
            ) : (
                <div className={classes.empty}>
                    <img alt="pokemon" title="No pokemon selected" src={logo} />
                </div>
            )}
        </div>
    );
});

DetailsWrapper.displayName = 'DetailsWrapper';

export default DetailsWrapper;
