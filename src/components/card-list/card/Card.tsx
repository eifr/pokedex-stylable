import { st, classes, vars } from './card.st.css';
import { pokemonTypeColors } from '../../../colors/pokemonTypeColors';
import type { PokemonTypes } from '../../../types';

interface CardProps {
    name: string;
    image: string;
    type: PokemonTypes;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, name, type, onClick }) => {
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
};

export default Card;
