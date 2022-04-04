import * as cardStylesheet from '../../pokedex-stylable/src/components/card-list/card/card.st.css';
import * as cardListStylesheet from '../../pokedex-stylable/src/components/card-list/card-list.st.css';
import * as detailsSectionStylesheet from '../../pokedex-stylable/src/components/pokemon-info/details-section/detailsSection.st.css';
import * as detailsViewStylesheet from '../../pokedex-stylable/src/components/pokemon-info/details-section/details-views/detailsViews.st.css';
import * as tabsStylesheet from '../../pokedex-stylable/src/components/tabs/tabs.st.css';
import * as buttonsSectionStylesheet from '../../pokedex-stylable/src/components/pokemon-info/buttons-section/buttonsSection.st.css';

import { StylableDOMUtil } from '@stylable/dom-test-kit';

const cardTestUtil = new StylableDOMUtil(cardStylesheet);
const cardListTestUtil = new StylableDOMUtil(cardListStylesheet);
const detailsSectionTestUtil = new StylableDOMUtil(detailsSectionStylesheet);
const tabsTestUtil = new StylableDOMUtil(tabsStylesheet);
const detailsViewUtil = new StylableDOMUtil(detailsViewStylesheet);
const buttonsSectionUtils = new StylableDOMUtil(buttonsSectionStylesheet);

export const cardSelector = {
    root: cardTestUtil.scopeSelector('.root'),
};

export const cardListSelector = {
    root: cardListTestUtil.scopeSelector('.root'),
    btn: cardListTestUtil.scopeSelector('.loadMoreBtn'),
};

export const detailsSectionSelector = {
    root: detailsSectionTestUtil.scopeSelector('.root'),
    empty: detailsSectionTestUtil.scopeSelector('.empty'),
};

export const tabsSelector = {
    tabBtn: tabsTestUtil.scopeSelector('.tabBtn'),
};

export const detailsViewSelector = {
    root: detailsViewUtil.scopeSelector('.root'),
    dataView: detailsViewUtil.scopeSelector('.pokemonData'),
    typeCapsule: detailsViewUtil.scopeSelector('.typeCapsule'),
    stat: detailsViewUtil.scopeSelector('.stats .stat'),
    poll: detailsViewUtil.scopeSelector('.stats .poll'),
};

export const buttonsSectionSelector = {
    root: buttonsSectionUtils.scopeSelector('.root'),
};
