import type React from 'react';
import { st, classes } from './app.st.css';
import Pokedex from './components/pokedex/Pokedex';

export interface AppProps {
    className?: string;
}

export const App: React.VFC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <Pokedex />
        </main>
    );
};
