import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


type InputPropsType = {
    labelText: string,
    inputType?: string,
    placeholder?: string,
    idInput?: string,
}

export const Input = (props: InputPropsType) => {
    return (
        <FlexWrapper direction="column" gap="8px">
            <StyledLabel htmlFor={props.idInput}>{props.labelText}</StyledLabel>
            {props.inputType === "textarea" ?
                <StyledTextarea id={props.idInput}
                                placeholder={props.placeholder}/>
                      :
                <StyledInput type={props.inputType}
                             id={props.idInput}
                             placeholder={props.placeholder}/>}
        </FlexWrapper>
    )
        ;
};

const StyledInput = styled.input`
    width: 400px;
    min-height: 40px;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    background: ${theme.colors.secondaryBg};
    font-size: 16px;
    font-family: inherit;
    padding-left: 10px;
`

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.fontMain};
`

const StyledTextarea = styled.textarea`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: 400px;
    min-height: 160px;
    background: ${theme.colors.secondaryBg};
    font-size: 16px;
    font-family: inherit;
    resize: none;
    padding-left: 10px;
    padding-top: 5px;
`