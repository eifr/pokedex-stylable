import { expect } from 'chai';
import { Browser, chromium, Page } from 'playwright-chromium';
import { cardSelector, detailsSectionSelector, tabsSelector } from '../test-toolkit/selectors';
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

    it('Find pokemon cards', async () => {
        const pokemonCards = page.locator(cardSelector.root);
        await pokemonCards.first().waitFor();
        const num = await pokemonCards.count();

        expect(num).to.equal(20);
    });

    it('Click on load more button', async () => {
        const button = page.locator('button', { hasText: 'Load More' });
        await button.waitFor();
        await button.click();

        const pokemonCards = page.locator(cardSelector.root);
        await pokemonCards.nth(21).waitFor();
        expect(await pokemonCards.count()).to.equal(40);
    });

    it('Find pokemon card and click on it', async () => {
        const selectedPokemonInfo = page.locator(detailsSectionSelector.root);
        await selectedPokemonInfo.waitFor();
        const pokemonName = await selectedPokemonInfo.textContent();
        expect(pokemonName?.toLowerCase()).to.not.contain('bulbasaur');

        const firstPokemonCard = page.locator(cardSelector.root).first();
        await firstPokemonCard.waitFor();

        const firstCardNameText = await firstPokemonCard.textContent();
        expect(firstCardNameText?.toLocaleLowerCase()).to.equal('bulbasaur');

        await firstPokemonCard.click();
        expect(await selectedPokemonInfo.textContent()).to.contain('bulbasaur');
    });

    it('Search for a pokemon', async () => {
        const searchTab = page.locator(tabsSelector.tabBtn, { hasText: 'Search' });
        await searchTab.waitFor();
        await searchTab.click();

        const selectedPokemonInfo = page.locator(detailsSectionSelector.root);
        expect(await selectedPokemonInfo.textContent()).to.not.contain('pikachu');
        const searchInput = page.locator('input');
        await searchInput.fill('pikachu');
        await page.keyboard.press('Enter');
        await selectedPokemonInfo.waitFor({ timeout: 3000 });
        expect(await selectedPokemonInfo.textContent()).to.contain('pikachu');
    });
});
