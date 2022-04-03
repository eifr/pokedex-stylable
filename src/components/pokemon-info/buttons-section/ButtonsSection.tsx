import { st, classes } from './buttonsSection.st.css';

interface ButtonsSectionProps {
    isPokemonSelected: boolean;
    next: null | (() => void);
    prev: null | (() => void);
}

export const ButtonsSection: React.FC<ButtonsSectionProps> = ({
    isPokemonSelected,
    prev,
    next,
}) => {
    return (
        <div className={st(classes.root)}>
            <button
                className={st(classes.arrowBtn)}
                disabled={!isPokemonSelected || prev === null}
                onClick={() => {
                    prev?.();
                }}
            >
                ◀
            </button>
            <button
                className={st(classes.arrowBtn)}
                disabled={!isPokemonSelected || next === null}
                onClick={() => {
                    next?.();
                }}
            >
                ▶
            </button>
        </div>
    );
};
