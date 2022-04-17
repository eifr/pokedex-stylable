import { expect } from 'chai';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ButtonsSection } from './ButtonsSection';

describe('Test buttons section', () => {
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

    it('render buttons section without selected pokemon', () => {
        act(() => {
            render(
                <ButtonsSection
                    isPokemonSelected={false}
                    next={() => {
                        return;
                    }}
                    prev={() => {
                        return;
                    }}
                />,
                container
            );
        });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn) => {
            expect(btn.getAttribute('disabled')).not.to.be.null;
        });
    });

    it('render buttons section with selected pokemon', () => {
        act(() => {
            render(
                <ButtonsSection
                    isPokemonSelected={true}
                    next={() => {
                        return;
                    }}
                    prev={() => {
                        return;
                    }}
                />,
                container
            );
        });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn) => {
            expect(btn.getAttribute('disabled')).to.be.null;
        });
    });

    it('render buttons section without buttons functions', () => {
        act(() => {
            render(<ButtonsSection isPokemonSelected={true} next={null} prev={null} />, container);
        });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn) => {
            expect(btn.getAttribute('disabled')).not.to.be.null;
        });
    });

    it('render buttons section with buttons functions', () => {
        act(() => {
            render(
                <ButtonsSection
                    isPokemonSelected={true}
                    next={() => {
                        return;
                    }}
                    prev={() => {
                        return;
                    }}
                />,
                container
            );
        });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn) => {
            expect(btn.getAttribute('disabled')).to.be.null;
        });
    });
});
