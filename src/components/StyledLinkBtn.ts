import {theme} from "../styles/Theme.ts";
import styled from "styled-components";

export const StyledLinkBtn = styled.a`
    font-family: "Roboto", sans-serif;
    padding: 8px 24px;
    color: ${theme.colors.fontMain};
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
`