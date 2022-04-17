import { st, classes, vars } from './top.st.css';
import { POKEMON_TYPE_COLORS } from '../../../colors/pokemonTypeColors';

const Top: React.VFC = () => {
    return (
        <div className={classes.root}>
            <div className={classes.circle} style={{ [vars.color]: POKEMON_TYPE_COLORS.grass }} />
            <div
                className={classes.circle}
                style={{ [vars.color]: POKEMON_TYPE_COLORS.electric }}
            />
            <div
                className={classes.circle}
                style={{ [vars.color]: POKEMON_TYPE_COLORS.fighting }}
            />
            <div
                className={st(classes.circle, { large: true })}
                style={{ [vars.color]: POKEMON_TYPE_COLORS.water }}
            />
        </div>
    );
};

export default Top;
