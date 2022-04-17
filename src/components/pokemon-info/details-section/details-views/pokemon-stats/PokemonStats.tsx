import { memo } from 'react';
import { POKEMON_TYPE_COLORS } from '../../../../../colors/pokemonTypeColors';
import { classes, vars } from '../detailsViews.st.css';
import type { PokemonInfo } from '../../../../../types';

const PokemonStats = memo(({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => {
    const { name, stats, types } = selectedPokemon;
    const [pokemonType] = types;

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
                                [vars.typeColor]: POKEMON_TYPE_COLORS[pokemonType.type.name],
                            }}
                        />
                        <div className={classes.text}>{stat.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
});

PokemonStats.displayName = 'PokemonStats';

export default PokemonStats;
