import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const StyledName = styled.span`
    ${font ( {family: '"Roboto", sans-serif', weight: 700, color: "#333", Fmin: 42, Fmax: 56} ) };
    white-space: nowrap;
    
    position: relative;
    z-index: 0;
    display: inline-block;

    @media ${theme.media.large} {
        align-self: end;
    }

    @media ${theme.media.mobile} {
        align-self: start;
    }
    
    &::before {
        content: "";
        display: inline-block;
        border-radius: 8px;
        width: 100%;
        height: 20px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
`
