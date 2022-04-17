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

    it('checks that the buttons section is disabled when no pokemon is selected', () => {
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

    it('checks that the buttons section is not disabled when pokemon is selected and next and prev functions are provided', () => {
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

    it('checks that the buttons section is disabled when next and prev functions are not provided', () => {
        act(() => {
            render(<ButtonsSection isPokemonSelected={true} next={null} prev={null} />, container);
        });
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn) => {
            expect(btn.getAttribute('disabled')).not.to.be.null;
        });
    });
});
