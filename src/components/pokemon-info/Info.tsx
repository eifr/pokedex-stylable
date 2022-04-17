import { memo, useContext, useEffect, useState } from 'react';
import { PokedexContext } from '../pokedex/Pokedex';
import { ButtonsSection } from './buttons-section/ButtonsSection';
import DetailsSection from './details-section/DetailsWrapper';
import TopSection from './TopSection/Top';
import { classes } from './info.st.css';
import PokemonOverview from './details-section/details-views/pokemon-overview/PokemonOverview';
import PokemonStats from './details-section/details-views/pokemon-stats/PokemonStats';
import type { PokemonInfo } from '../../types';

enum ViewsType {
    PokemonOverview = 1,
    PokemonStats,
}

const infoViews = {
    [ViewsType.PokemonOverview]: ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => (
        <PokemonOverview selectedPokemon={selectedPokemon} />
    ),
    [ViewsType.PokemonStats]: ({ selectedPokemon }: { selectedPokemon: PokemonInfo }) => (
        <PokemonStats selectedPokemon={selectedPokemon} />
    ),
};

type ViewType = keyof typeof infoViews;

const ENUM_SIZE = Object.keys(infoViews).length;

const Info: React.VFC = memo(() => {
    const { selectedPokemon } = useContext(PokedexContext);
    const [currentView, setCurrentView] = useState<ViewType>(ViewsType.PokemonOverview);

    useEffect(() => {
        setCurrentView(ViewsType.PokemonOverview);
    }, [selectedPokemon]);

    const next =
        currentView < ENUM_SIZE
            ? () => {
                  setCurrentView(currentView + 1);
              }
            : null;

    const prev =
        currentView > 1
            ? () => {
                  setCurrentView(currentView - 1);
              }
            : null;

    return (
        <div className={classes.root}>
            <TopSection />
            <DetailsSection
                selectedPokemon={selectedPokemon}
                viewToDisplay={infoViews[currentView]}
            />
            <ButtonsSection isPokemonSelected={selectedPokemon !== null} next={next} prev={prev} />
        </div>
    );
});

Info.displayName = 'Info';

export default Info;
