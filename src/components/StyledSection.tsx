import styled from "styled-components";

type StyledSectionPropsType = {
    direction? : string,
    justify? : string,
    align? : string,
    wrap?: string,
    gap?: string,
    maxWidth?: string,
}

export const StyledSection = styled.section<StyledSectionPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    max-width: ${props => props.maxWidth || '100%'};
 `


