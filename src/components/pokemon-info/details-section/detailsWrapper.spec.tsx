import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import DetailsSection from './DetailsWrapper';
import { detailsSectionSelector } from '../../../../test-toolkit/selectors';
import { getPokemonObj } from '../../../../test-toolkit/utils';

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

it('render DetailsSection without selected pokemon', () => {
    act(() => {
        render(
            <DetailsSection
                selectedPokemon={null}
                viewToDisplay={() => {
                    return <div>test component</div>;
                }}
            />,
            container
        );
    });

    expect(container.textContent).not.to.include('test component');
    const emptyStateComponent = container.querySelector(detailsSectionSelector.empty);
    expect(emptyStateComponent).not.to.equal(null);
});

it('render DetailsSection with selected pokemon', () => {
    act(() => {
        render(
            <DetailsSection
                selectedPokemon={pokemon}
                viewToDisplay={() => {
                    return <div>test component</div>;
                }}
            />,
            container
        );
    });
    expect(container.textContent).to.include('test component');
    const emptyStateComponent = container.querySelector(detailsSectionSelector.empty);
    expect(emptyStateComponent).to.equal(null);
});
