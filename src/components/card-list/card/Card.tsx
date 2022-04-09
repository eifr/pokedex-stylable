import { classes, vars } from './card.st.css';
import { pokemonTypeColors } from '../../../colors/pokemonTypeColors';
import type { PokemonTypes } from '../../../types';
import { memo } from 'react';

interface CardProps {
    name: string;
    image: string;
    type: PokemonTypes;
    onClick: () => void;
}

const Card: React.VFC<CardProps> = memo<CardProps>(({ image, name, type, onClick }) => {
    return (
        <div
            className={classes.root}
            style={{ [vars.typeColor]: pokemonTypeColors[type] }}
            onClick={onClick}
        >
            <img src={image} alt={name} />
            <div>{name}</div>
        </div>
    );
});

Card.displayName = 'Card';

export default Card;
