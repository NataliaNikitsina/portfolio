import styled from "styled-components";


type StyledLinkPropsType = {
    border? : string,
    radius? : string,
    backgroundColor? : string,
}

export const StyledLinkBtn = styled.a<StyledLinkPropsType>`
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.radius || 'none'};
    background-color: ${props => props.backgroundColor || 'none'};
    padding: 8px 24px;
    color: #25282b;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
`