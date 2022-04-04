import { st, classes, vars } from './pokedexContainer.st.css';
import { pokemonTypeColors } from '../../colors/pokemonTypeColors';

const Top = () => {
    return (
        <div className={st(classes.top)}>
            <div className={st(classes.circle)} style={{ [vars.color]: pokemonTypeColors.grass }} />
            <div
                className={st(classes.circle)}
                style={{ [vars.color]: pokemonTypeColors.electric }}
            />
            <div
                className={st(classes.circle)}
                style={{ [vars.color]: pokemonTypeColors.fighting }}
            />
            <div
                className={st(classes.circle, { large: true })}
                style={{ [vars.color]: pokemonTypeColors.water }}
            />
        </div>
    );
};

export default Top;
