import { st, classes, vars } from './pokedexContainer.st.css';
import { pokemonTypeColors } from '../../colors/pokemonTypeColors';

const Top: React.VFC = () => {
    return (
        <div className={classes.top}>
            <div className={classes.circle} style={{ [vars.color]: pokemonTypeColors.grass }} />
            <div className={classes.circle} style={{ [vars.color]: pokemonTypeColors.electric }} />
            <div className={classes.circle} style={{ [vars.color]: pokemonTypeColors.fighting }} />
            <div
                className={st(classes.circle, { large: true })}
                style={{ [vars.color]: pokemonTypeColors.water }}
            />
        </div>
    );
};

export default Top;
