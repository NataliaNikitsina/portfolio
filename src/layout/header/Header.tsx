import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const headerArray = [
    "About",
    "Skills",
    "Projects",
    "Contacts"
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledName>Natalia Nikitsina</StyledName>
                    <HeaderMenu menuItems={headerArray}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 14px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const StyledName = styled.span`
    font-family: "Comfortaa", sans-serif;;
    font-weight: 700;
    font-size: 18px;
    line-height: 180%;
    color: ${theme.colors.fontMain};
`
