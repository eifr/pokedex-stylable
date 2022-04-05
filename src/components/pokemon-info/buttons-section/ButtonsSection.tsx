import { classes } from './buttonsSection.st.css';

interface ButtonsSectionProps {
    isPokemonSelected: boolean;
    next: null | (() => void);
    prev: null | (() => void);
}

export const ButtonsSection: React.VFC<ButtonsSectionProps> = ({
    isPokemonSelected,
    prev,
    next,
}) => {
    return (
        <div className={classes.root}>
            <button
                className={classes.arrowBtn}
                disabled={!isPokemonSelected || prev === null}
                onClick={() => {
                    prev?.();
                }}
            >
                ◀
            </button>
            <button
                className={classes.arrowBtn}
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
