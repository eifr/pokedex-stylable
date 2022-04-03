import type { PokemonInfo } from '../../../types';
import { st, classes, vars } from './detailsSection.st.css';
import { pokemonTypeColors } from '../../../colors/pokemonTypeColors';
import logo from '../../../../public/assets/International_Pokémon_logo.svg.png';

const DEFAULT_TYPE = 'water';

interface SelectedPokemon {
    selectedPokemon: PokemonInfo | null;
    viewToDisplay: ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => JSX.Element;
}

const DetailsSection: React.FC<SelectedPokemon> = ({ selectedPokemon, viewToDisplay }) => {
    const { types } = selectedPokemon || {};

    const pokemonType = types?.[0].type.name ?? DEFAULT_TYPE;

    return (
        <div
            style={{ [vars.typeColor]: pokemonTypeColors[pokemonType] }}
            className={st(classes.root)}
        >
            {selectedPokemon ? (
                <div className={st(classes.details)}>{viewToDisplay({ selectedPokemon })}</div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <img style={{ width: 300 }} src={logo} />
                </div>
            )}
        </div>
    );
};

export default DetailsSection;
