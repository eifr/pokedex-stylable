import type { PokemonInfo } from '../../../types';
import { classes, vars } from './detailsWrapper.st.css';
import { pokemonTypeColors } from '../../../colors/pokemonTypeColors';
import logo from '../../../../public/assets/International_Pokémon_logo.svg.png';

const DEFAULT_TYPE = 'water';

interface SelectedPokemon {
    selectedPokemon: PokemonInfo | null;
    viewToDisplay: ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => JSX.Element;
}

const DetailsWrapper: React.VFC<SelectedPokemon> = ({ selectedPokemon, viewToDisplay }) => {
    const { types } = selectedPokemon || {};
    const pokemonType = types?.[0].type.name ?? DEFAULT_TYPE;

    return (
        <div style={{ [vars.typeColor]: pokemonTypeColors[pokemonType] }} className={classes.root}>
            {selectedPokemon ? (
                <div className={classes.details}>{viewToDisplay({ selectedPokemon })}</div>
            ) : (
                <div className={classes.empty}>
                    <img alt="pokemon" title="No pokemon selected" src={logo} />
                </div>
            )}
        </div>
    );
};

export default DetailsWrapper;
