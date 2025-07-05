import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const StyledHello = styled.span`
    ${font ( {family: '"Roboto", sans-serif', weight: 700, color: "#333", Fmin: 42, Fmax: 56} ) };
    
    white-space: nowrap;

    @media ${theme.media.large} {
        align-self: start;
    }
`