import { st, classes, vars } from './pokedexContainer.st.css';
import { POKEMON_TYPE_COLORS } from '../../colors/pokemonTypeColors';

const Top = () => {
    return (
        <div className={classes.top}>
            <div className={classes.circle} style={{ [vars.color]: POKEMON_TYPE_COLORS.grass }} />
            <div className={classes.circle} style={{ [vars.color]: POKEMON_TYPE_COLORS.electric }} />
            <div className={classes.circle} style={{ [vars.color]: POKEMON_TYPE_COLORS.fighting }} />
            <div
                className={st(classes.circle, { large: true })}
                style={{ [vars.color]: POKEMON_TYPE_COLORS.water }}
            />
        </div>
    );
};

export default Top;
