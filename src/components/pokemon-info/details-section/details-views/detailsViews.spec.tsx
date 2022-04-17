import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { detailsViewSelector } from '../../../../../test-toolkit/selectors';
import PokemonOverview from './pokemon-overview/PokemonOverview';
import { getPokemonObj } from '../../../../../test-toolkit/utils';
import PokemonStats from './pokemon-stats/PokemonStats';

describe('Test details views', () => {
    let container: Element;
    const pokemon = getPokemonObj();

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
    });

    it('checks pokemon name in the PokemonOverview component is equal to the selected pokemon', () => {
        act(() => {
            render(<PokemonOverview selectedPokemon={pokemon} />, container);
        });
        const pokemonDataView = container.querySelector(detailsViewSelector.dataView);
        expect(pokemonDataView?.querySelector('.name')?.textContent).to.equal(pokemon.name);
    });

    it('checks pokemon types in the PokemonOverview component are equal to the selected pokemon types array', () => {
        act(() => {
            render(<PokemonOverview selectedPokemon={pokemon} />, container);
        });
        const typeCapsules = container.querySelectorAll(detailsViewSelector.typeCapsule);
        typeCapsules.forEach((capsule, index) => {
            expect(capsule.textContent).to.include(pokemon.types[index].type.name);
        });
    });

    it('checks pokemon stast height are equal to the selected pokemon stats object', () => {
        act(() => {
            render(<PokemonStats selectedPokemon={pokemon} />, container);
        });
        const stats = container.querySelectorAll(detailsViewSelector.stat);
        const polls = container.querySelectorAll(detailsViewSelector.poll);

        stats.forEach((stat, index) => {
            const statText = stat?.textContent;
            if (statText !== null) {
                const currentStat = pokemon.stats.find((curr) => curr.stat.name === statText);
                expect(window.getComputedStyle(polls[index]).height).to.equal(
                    `${currentStat?.base_stat.toString() ?? ''}px`
                );
            }
        });
    });
});