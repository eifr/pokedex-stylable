import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { detailsViewSelector } from '../../../../../test-toolkit/selectors';
import PokemonOverview from './PokemonOverview';
import { getPokemonObj } from '../../../../../test-toolkit/utils';
import PokemonStats from './PokemonStats';

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

it('render pokemon info data view - name', () => {
    act(() => {
        render(<PokemonOverview selectedPokemon={pokemon} />, container);
    });
    const pokemonDataView = container.querySelector(detailsViewSelector.dataView);
    expect(pokemonDataView?.querySelector('.name')?.textContent).to.equal(pokemon.name);
});

it('render pokemon info data view - types', () => {
    act(() => {
        render(<PokemonOverview selectedPokemon={pokemon} />, container);
    });
    const typeCapsules = container.querySelectorAll(detailsViewSelector.typeCapsule);
    expect(typeCapsules[0].textContent).to.include(pokemon.types[0].type.name);
    expect(typeCapsules[1].textContent).to.include(pokemon.types[1].type.name);
});

it('render pokemon stats', () => {
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
