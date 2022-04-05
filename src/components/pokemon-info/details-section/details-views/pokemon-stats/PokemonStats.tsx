import { pokemonTypeColors } from '../../../../../colors/pokemonTypeColors';
import type { PokemonInfo } from '../../../../../types';
import { classes, vars } from '../detailsViews.st.css';

const PokemonStats = ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => {
    const { name, stats, types } = selectedPokemon;

    return (
        <div className={classes.statsContainer}>
            <h2>{name} stats</h2>
            <div className={classes.stats}>
                {stats.map(({ stat, base_stat }) => (
                    <div className={classes.stat} key={stat.name} title={base_stat.toString()}>
                        <div
                            className={classes.poll}
                            style={{
                                [vars.valueHeight]: `${base_stat}px`,
                                [vars.typeColor]: pokemonTypeColors[types[0].type.name],
                            }}
                        />
                        <div className={classes.text}>{stat.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonStats;
