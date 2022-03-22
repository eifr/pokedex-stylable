import { expect } from 'chai';
import { Browser, chromium, Page } from 'playwright-chromium';
import { selector } from '../test-toolkit/selectors';
import { runServer, stopServer } from '../test-toolkit/server';

describe('e2e', () => {
    let browser: Browser;
    let page: Page;

    before(async () => {
        await runServer();
        browser = await chromium.launch({
            headless: false,
        });
        page = await browser.newPage();
        await page.goto('localhost:8080');
    });

    after(async () => {
        await browser.close();
        await stopServer();
    });

    it('test', async () => {
        const title = page.locator(selector.root);
        expect(await title.textContent()).to.contain('Hello Stylable');
    });

    it('Find pokemon cards', async () => {
        const pokemonCards = page.locator('.card');
        expect(await pokemonCards.count()).to.equal(20);
    });

    it('Click on load more button', async () => {
        const button = page.locator('.load-more');
        expect(await button.count()).to.equal(1);
        await button.click();
        const pokemonCards = page.locator('.card');
        expect(await pokemonCards.count()).to.equal(40);
    });

    it('Click on load more button', async () => {
        const button = page.locator('.load-more');
        expect(await button.count()).to.equal(1);
        await button.click();
        const pokemonCards = page.locator('.card');
        expect(await pokemonCards.count()).to.equal(40);
    });

    it('Find pokemon card and click on it', async () => {
        const selectedPokemonInfo = page.locator('.info');
        expect(await selectedPokemonInfo.count()).to.equal(1);
        expect(await selectedPokemonInfo.textContent()).to.not.contain('Bulbasaur');

        const firstPokemonCard = page.locator('.card >> nth=0');
        const firstCardName = firstPokemonCard.locator('.name');
        expect(await firstCardName.textContent()).to.equal('Bulbasaur');

        await firstPokemonCard.click();
        expect(await selectedPokemonInfo.textContent()).to.contain('Bulbasaur');
    });

    it('Search for a pokemon', async () => {
        const searchTab = page.locator('.tab >> text=Search');
        expect(await searchTab.count()).to.equal(1);

        const selectedPokemonInfo = page.locator('.info');
        expect(await selectedPokemonInfo.count()).to.equal(1);
        expect(await selectedPokemonInfo.textContent()).to.not.contain('Pikachu');
        
        const searchInput = page.locator('input');
        await searchInput.fill('Pikachu');
        const searchButton = page.locator('button >> text=Search');
        expect(await searchButton.count()).to.equal(1);
        await searchButton.click();
        expect(await selectedPokemonInfo.textContent()).to.contain('Pikachu');
    });
    

});
