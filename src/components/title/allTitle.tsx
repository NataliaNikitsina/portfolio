import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const StyledTitleH1 = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    margin-top: 110px;
`

export const StyledTitleH2 = styled.h2`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    color: ${theme.colors.fontMain};
`

export const StyledTitleH3 = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: ${theme.colors.fontMain};
`