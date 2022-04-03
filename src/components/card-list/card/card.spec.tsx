import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { cardSelector } from '../../../../test-toolkit/selectors';
import Card from './Card';
import { TypeOfPokemon } from '../../../../src/types';

let container: Element;
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

it('render card with pokemon name', () => {
    act(() => {
        render(
            <Card
                name={'Pokemon'}
                image={''}
                type={TypeOfPokemon.Water}
                onClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />,
            container
        );
    });
    const card = container.querySelector(cardSelector.root);
    expect(card?.textContent).to.equal('Pokemon');
});

it('render card with pokemon type color', () => {
    act(() => {
        render(
            <Card
                name={'Pokemon'}
                image={''}
                type={TypeOfPokemon.Water}
                onClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />,
            container
        );
    });
    const card = container.querySelector(cardSelector.root);
    if (card !== null) {
        const style = window.getComputedStyle(card);
        expect(style.backgroundColor).to.equal('rgb(99, 144, 240)');
    }
});
