import { st, classes, vars } from './card.st.css';
import { POKEMON_TYPE_COLORS } from '../../../colors/pokemonTypeColors';
import { memo } from 'react';
import type { PokemonTypes } from '../../../types';

interface CardProps {
    name: string;
    image: string;
    type: PokemonTypes;
    onClick?: () => void;
}

const Card = memo<CardProps>(({ image, name, type, onClick }) => {
    return (
        <div
            className={st(classes.root, { disabled: !onClick })}
            style={{ [vars.typeColor]: POKEMON_TYPE_COLORS[type] }}
            onClick={onClick}
        >
            <img className={classes.thumbnail} src={image} alt={name} />
            <h4 className={classes.name}>{name}</h4>
        </div>
    );
});

Card.displayName = 'Card';

export default Card;
