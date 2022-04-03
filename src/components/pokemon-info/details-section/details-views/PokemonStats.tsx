import { pokemonTypeColors } from '../../../../colors/pokemonTypeColors';
import type { PokemonInfo } from '../../../../types';
import { st, classes, vars } from './detailsViews.st.css';

const PokemonStats = ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => {
    const { name, stats, types } = selectedPokemon;

    return (
        <div className={st(classes.statsContainer)}>
            <h2>{name} stats</h2>
            <div className={st(classes.stats)}>
                {stats.map(({ stat, base_stat }) => (
                    <div className={st(classes.stat)} key={stat.name} title={base_stat.toString()}>
                        <div
                            className={st(classes.poll)}
                            style={{
                                [vars.valueHeight]: `${base_stat}px`,
                                [vars.typeColor]: pokemonTypeColors[types[0].type.name],
                            }}
                        />
                        <div className={st(classes.text)}>{stat.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonStats;
