import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type StyledTextPropsType = {
    size?: string,
}

export const StyledText = styled.p<StyledTextPropsType>`
    font-weight: 400;
    font-size: ${props => props.size || '18px'};
    line-height: 1.5;
    color: ${theme.colors.fontText};
    text-align: left;
`