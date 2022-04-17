import React, { memo, useState } from 'react';
import CardList from '../card-list/CardList';
import Search from '../search-input/Search';
import { classes } from './tabs.st.css';

const Tabs: React.VFC = memo(() => {
    const pokedexTabs: { component: JSX.Element; label: string }[] = [
        { component: <CardList />, label: 'Browse' },
        { component: <Search />, label: 'Search' },
    ];

    const [firstTab] = pokedexTabs;

    const [componentToDisplay, setComponentToDisplay] = useState(firstTab.component);

    const labels = pokedexTabs.map(({ component, label }) => {
        return (
            <button
                className={classes.tabBtn}
                key={label}
                onClick={() => setComponentToDisplay(component)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className={classes.root}>
            <div className={classes.buttonsWrapper}>{labels}</div>
            {componentToDisplay}
        </div>
    );
});

Tabs.displayName = 'Tabs';

export default Tabs;
