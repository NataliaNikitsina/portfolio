import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, Fmin, Fmax} : FontPropsType) => `
    font-family: ${family || "Nunito"};
    font-weight: ${weight || "normal"};
    color: ${color || theme.colors.fontMain};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`