// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";


type InputPropsType = {
    labelText: string,
    inputType?: string,
    placeholder?: string,
    width: string,
    idInput?: string,
}

export const Input = (props: InputPropsType) => {
    return (
        <FlexWrapper direction="column" gap="8px">
            <StyledLabel htmlFor={props.idInput}>{props.labelText}</StyledLabel>
            {props.inputType === "textarea" ?
                <StyledTextarea width={props.width}
                                id={props.idInput}/> :
                <StyledInput type={props.inputType}
                             width={props.width}
                             id={props.idInput}/>}
        </FlexWrapper>
    )
        ;
};

type StyledInputPropsType = {
    width: string,
}

const StyledInput = styled.input<StyledInputPropsType>`
    width: ${props => props.width};
    min-height: 40px;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    background: #fff;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
`

const StyledLabel = styled.label`
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #25282b;
`
type StyledTextareaPropsType = {
    width: string,
}

const StyledTextarea = styled.textarea<StyledTextareaPropsType>`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: ${props => props.width};
    min-height: 160px;
    background: #fff;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    resize: none;
`