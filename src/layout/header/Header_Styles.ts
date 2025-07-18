import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header<{bcgColor: boolean}>`
    padding: 14px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    max-width: 100vw;

    ${props => props.bcgColor && css<{bcgColor: boolean}>`
                background-color: ${theme.colors.secondaryBg};
        `}
`

const Name = styled.span`
    font-family: "Comfortaa", sans-serif;;
    font-weight: 700;
    font-size: 22px;
    color: ${theme.colors.fontMain};
    cursor: pointer;
`
export const S = {
    Header,
    Name,
}