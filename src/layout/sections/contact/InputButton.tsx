import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type InputButtonPropsType = {
    inputType: string,
    width: string,
    value: string,
    align?: string,
}

export const InputButton = (props: InputButtonPropsType) => {
    return (
        <StyledInputButton type={props.inputType} width={props.width} align={props.align} value={props.value}/>
    );
};

type StyledInputPropsType = {
    width: string,
    align?: string,
}

const StyledInputButton = styled.input<StyledInputPropsType>`
    border-radius: 8px;
    padding: 8px 24px;
    max-width: ${props => props.width};
    background: ${theme.colors.accent};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.fontMain};
    align-self: ${props => props.align || 'auto'};;
`