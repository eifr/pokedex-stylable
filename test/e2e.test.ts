import { expect } from 'chai';
import { Browser, chromium, Page } from 'playwright-chromium';
import { cardSelector, detailsSectionSelector, tabsSelector } from '../test-toolkit/selectors';
import { runServer, stopServer } from '../test-toolkit/server';

describe('e2e', () => {
    const NUM_OF_POKEMON_CARDS = 20;
    let browser: Browser;
    let page: Page;

    before(async () => {
        const { port, host } = await runServer();
        browser = await chromium.launch();
        page = await browser.newPage();
        await page.goto(`${host}:${port}`);
    });

    after(async () => {
        await browser.close();
        await stopServer();
    });

    it('Checks initial group of pokemon cards', async () => {
        const pokemonCards = page.locator(cardSelector.root);
        await pokemonCards.nth(NUM_OF_POKEMON_CARDS - 1).waitFor();

        expect(await pokemonCards.count(), 'failed to load initial group').to.equal(NUM_OF_POKEMON_CARDS);
    });

    it('Loads another group of pokemon cards by clicking on load more button', async () => {
        const button = page.locator('button', { hasText: 'Load More' });
        await button.click();

        const pokemonCards = page.locator(cardSelector.root);
        await pokemonCards.nth(NUM_OF_POKEMON_CARDS * 2 - 1).waitFor();

        expect(await pokemonCards.count(), 'failed to click on load more and load cards').to.equal(
            NUM_OF_POKEMON_CARDS * 2
        );
    });

    it("Displays pokemon info by clicking on its card", async () => {
        const BULBASAUR = 'bulbasaur';
        const selectedPokemonInfo = page.locator(detailsSectionSelector.root);
        const image = selectedPokemonInfo.locator('img');
        expect(await image.getAttribute('title')).to.equal('No pokemon selected');

        const pokemonName = await selectedPokemonInfo.textContent();
        expect(pokemonName).to.not.contain(BULBASAUR);

        const firstPokemonCard = page.locator(cardSelector.root).first();
        expect(await firstPokemonCard.textContent()).to.equal(BULBASAUR);

        await firstPokemonCard.click();
        expect(
            await selectedPokemonInfo.textContent(),
            'failed to display the correct pokemon by click on card'
        ).to.contain(BULBASAUR);
    });

    it("Displays pokemon info by searching its name", async () => {
        const PIKACHU = 'pikachu';
        const searchTab = page.locator(tabsSelector.tabBtn, { hasText: 'Search' });
        await searchTab.click();

        const selectedPokemonInfo = page.locator(detailsSectionSelector.root);
        expect(await selectedPokemonInfo.textContent()).to.not.contain(PIKACHU);

        const searchInput = page.locator('input');
        await searchInput.fill(PIKACHU);
        await page.keyboard.press('Enter');
        await page.locator(detailsSectionSelector.root, { hasText: PIKACHU }).waitFor();
        expect(
            await selectedPokemonInfo.textContent(),
            'failed to display the correct pokemon by search pokemon name'
        ).to.contain(PIKACHU);
    });
});
