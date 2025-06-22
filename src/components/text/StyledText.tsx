import styled from "styled-components";

type StyledTextPropsType = {
    size?: string,
}

export const StyledText = styled.p<StyledTextPropsType>`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: ${props => props.size || '18px'};
    line-height: 1.5;
    color: #828282;
    text-align: left;
`