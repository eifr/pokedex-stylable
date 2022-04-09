import type { PokemonInfo, PokemonTypes } from '../../../../../types';
import { pokemonTypeColors } from '../../../../../colors/pokemonTypeColors';
import { st, classes, vars } from '../detailsViews.st.css';
import { memo } from 'react';

interface TypeProps {
    type: PokemonTypes;
}

const Type: React.VFC<TypeProps> = memo(({ type }) => {
    return (
        <div className={classes.typeCapsule} style={{ [vars.typeColor]: pokemonTypeColors[type] }}>
            {type}
        </div>
    );
});

Type.displayName = 'Type';

interface KeyValProps {
    keyName: string;
    value: string;
    className?: string;
}

const KeyVal: React.VFC<KeyValProps> = memo(({ keyName, value, className }) => {
    return (
        <div className={st(classes.keyVal, className)}>
            <div>{keyName}</div>
            <div>{value}</div>
        </div>
    );
});

KeyVal.displayName = 'KeyVal';

interface PokemonOverviewProps {
    selectedPokemon: PokemonInfo;
}

const PokemonOverview: React.VFC<PokemonOverviewProps> = memo(({ selectedPokemon }) => {
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
});

PokemonOverview.displayName = 'PokemonOverview';

export default PokemonOverview;
