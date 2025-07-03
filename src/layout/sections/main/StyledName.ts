import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const StyledName = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #333;
    
    position: relative;
    z-index: 0;
    display: inline-block;

    @media ${theme.media.large} {
        font-size: 48px;
    }

    @media ${theme.media.tablet} {
        align-self: end;
    }

    @media ${theme.media.mobile} {
        align-self: start;
        font-size: 42px;
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
