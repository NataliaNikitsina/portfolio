import styled from "styled-components";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";


export const TabMenu = () => {
    return (
        <StyledTabMenu>
            <FlexWrapper justify={"space-evenly"}>
                <StyledTabItem>
                    <StyledLinkBtn as="button" href="#">All</StyledLinkBtn>
                </StyledTabItem>
                <StyledTabItem>
                    <StyledLinkBtn as="button" href="#">Landing Page</StyledLinkBtn>
                </StyledTabItem>
                <StyledTabItem>
                    <StyledLinkBtn as="button" href="#">React</StyledLinkBtn>
                </StyledTabItem>
                <StyledTabItem>
                    <StyledLinkBtn as="button" href="#">Spa</StyledLinkBtn>
                </StyledTabItem>
            </FlexWrapper>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.ul`
    max-width: 800px;
    width: 100%;
    margin: 0 auto 80px;
`

const StyledTabItem = styled.li`
    ${StyledLinkBtn} {
        max-width: 200px;
        width: 100%;
        min-height: 43px;
        border-radius: 8px;
        border: 2px solid ${theme.colors.fontMain};
        background-color: transparent;
    }
`