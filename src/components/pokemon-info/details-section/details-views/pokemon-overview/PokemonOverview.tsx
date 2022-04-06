import type { PokemonInfo, PokemonTypes } from '../../../../../types';
import { pokemonTypeColors } from '../../../../../colors/pokemonTypeColors';
import { classes, vars } from '../detailsViews.st.css';

interface TypeProps {
    type: PokemonTypes;
}

const Type: React.VFC<TypeProps> = ({ type }) => {
    return (
        <div className={classes.typeCapsule} style={{ [vars.typeColor]: pokemonTypeColors[type] }}>
            {type}
        </div>
    );
};

interface KeyValProps {
    keyName: string;
    value: string;
    className?: string;
}

const KeyVal: React.VFC<KeyValProps> = ({ keyName, value, className }) => {
    return (
        <div className={(classes.keyVal, className)}>
            <div>{keyName}</div>
            <div>{value}</div>
        </div>
    );
};

interface PokemonOverviewProps {
    selectedPokemon: PokemonInfo
}

const PokemonOverview: React.VFC<PokemonOverviewProps> = ({ selectedPokemon }) => {
    const { id, name, sprites, weight, height, types } = selectedPokemon;
    return (
        <>
            <img
                className={classes.pokemonImage}
                src={sprites?.other.dream_world.front_default ?? sprites?.front_default}
            />
            <div className={classes.pokemonData}>
                <KeyVal keyName={name} value={''} className="name" />
                <KeyVal keyName="Id" value={id.toString()} />
                <KeyVal keyName="Weight" value={weight.toString()} />
                <KeyVal keyName="Height" value={height.toString()} />
                <div className={classes.pokemonTypes}>
                    {types?.map(({ type }) => (
                        <Type key={`${name ?? ''}-${type.name}`} type={type.name} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PokemonOverview;
