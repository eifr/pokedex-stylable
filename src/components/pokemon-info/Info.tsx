import { useContext, useEffect, useState } from 'react';
import { PokedexContext } from '../pokedex/Pokedex';
import { ButtonsSection } from './buttons-section/ButtonsSection';
import DetailsSection from './details-section/DetailsSection';
import { classes } from './info.st.css';
import PokemonOverview from './details-section/details-views/PokemonOverview';
import type { PokemonInfo } from '../../types';
import PokemonStats from './details-section/details-views/PokemonStats';

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

const Info = () => {
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
            <DetailsSection
                selectedPokemon={selectedPokemon}
                viewToDisplay={infoViews[currentView]}
            />
            <ButtonsSection isPokemonSelected={selectedPokemon !== null} next={next} prev={prev} />
        </div>
    );
};

export default Info;
