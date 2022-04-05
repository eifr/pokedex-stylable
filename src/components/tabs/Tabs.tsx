import React, { useState } from 'react';
import CardList from '../card-list/CardList';
import Search from '../search-input/Search';
import { classes } from './tabs.st.css';

const Tabs: React.VFC = () => {
    const pokedexTabs: { [key: string]: { component: JSX.Element; label: string } } = {
        browse: { component: <CardList />, label: 'Browse' },
        search: { component: <Search />, label: 'Search' },
    };

    const [componentToDisplay, setComponentToDisplay] = useState(pokedexTabs['browse'].component);

    const labels = Object.keys(pokedexTabs).map((key) => {
        return (
            <button
                className={classes.tabBtn}
                key={key}
                onClick={() => setComponentToDisplay(pokedexTabs[key].component)}
            >
                {pokedexTabs[key].label}
            </button>
        );
    });

    return (
        <div>
            <div>{labels}</div>
            <div>{componentToDisplay}</div>
        </div>
    );
};

export default Tabs;