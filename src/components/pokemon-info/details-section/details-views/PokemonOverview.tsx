import type { PokemonInfo, PokemonTypes } from '../../../../types';
import { pokemonTypeColors } from '../../../../colors/pokemonTypeColors';
import { st, classes, vars } from './detailsViews.st.css';

const Type = ({ type }: { type: PokemonTypes }) => {
    return (
        <div
            className={st(classes.typeCapsule)}
            style={{ [vars.typeColor]: pokemonTypeColors[type] }}
        >
            {type}
        </div>
    );
};

const KeyVal = ({
    keyName,
    value,
    className,
}: {
    keyName: string;
    value: string;
    className?: string;
}) => {
    return (
        <div className={st(classes.keyVal, className)}>
            <div>{keyName}</div>
            <div>{value}</div>
        </div>
    );
};

const PokemonOverview = ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => {
    const { id, name, sprites, weight, height, types } = selectedPokemon;
    return (
        <>
            <img
                className={st(classes.pokemonImage)}
                src={sprites?.other.dream_world.front_default ?? sprites?.front_default}
            />
            <div className={st(classes.pokemonData)}>
                <KeyVal keyName={name} value={''} className="name" />
                <KeyVal keyName="Id" value={id.toString()} />
                <KeyVal keyName="Weight" value={weight.toString()} />
                <KeyVal keyName="Height" value={height.toString()} />
                <div className={st(classes.pokemonTypes)}>
                    {types?.map(({ type }) => (
                        <Type key={`${name ?? ''}-${type.name}`} type={type.name} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PokemonOverview;
