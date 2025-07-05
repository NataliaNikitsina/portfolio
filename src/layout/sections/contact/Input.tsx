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
                <StyledInput as={"textarea"} id={props.idInput}
                                placeholder={props.placeholder}/>
                      :
                <StyledInput type={props.inputType}
                             id={props.idInput}
                             placeholder={props.placeholder}/>}
        </FlexWrapper>
    );
};

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.fontMain};
`

export const StyledInput = styled.input`
    width: 100%;
    min-height: 40px;
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    background: ${theme.colors.secondaryBg};
    font-size: 16px;
    font-family: Nunito, sans-serif;
    padding-left: 10px;
    color: ${theme.colors.fontMain};

    &::placeholder {
        color: ${theme.colors.fontText}
    };

    &:focus-visible {
        outline: 1px solid ${theme.colors.fontText};
    }
`