import * as cardStylesheet from '../../pokedex-stylable/src/components/card-list/card/card.st.css';
import * as cardListStylesheet from '../../pokedex-stylable/src/components/card-list/card-list.st.css';
import * as detailsSectionStylesheet from '../../pokedex-stylable/src/components/pokemon-info/details-section/detailsSection.st.css';
import * as detailsViewStylesheet from '../../pokedex-stylable/src/components/pokemon-info/details-section/details-views/detailsViews.st.css';
import * as tabsStylesheet from '../../pokedex-stylable/src/components/tabs/tabs.st.css';

import { StylableDOMUtil } from '@stylable/dom-test-kit';

const cardTestUtil = new StylableDOMUtil(cardStylesheet);
const cardListTestUtil = new StylableDOMUtil(cardListStylesheet);
const detailsSectionTestUtil = new StylableDOMUtil(detailsSectionStylesheet);
const tabsTestUtil = new StylableDOMUtil(tabsStylesheet);
const detailsViewUtil = new StylableDOMUtil(detailsViewStylesheet);

export const cardSelector = {
    root: cardTestUtil.scopeSelector('.root'),
};

export const cardListLoadMoreBtnSelector = {
    btn: cardListTestUtil.scopeSelector('.loadMoreBtn'),
};

export const detailsSectionSelector = {
    root: detailsSectionTestUtil.scopeSelector('.root'),
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
