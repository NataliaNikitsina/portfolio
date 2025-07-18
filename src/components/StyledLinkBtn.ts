import {theme} from "../styles/Theme.ts";
import styled from "styled-components";

type StyledLinkBtnPropsType = {
    border?: string;
    bcgColor?: string;
}

export const StyledLinkBtn = styled.a<StyledLinkBtnPropsType>`
    font-family: "Roboto", sans-serif;
    padding: 8px 24px;
    color: ${theme.colors.fontMain};
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    border: ${props => props.border || 'none'};
    background-color: ${props => props.bcgColor || 'transparent'};
`