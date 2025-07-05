import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

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
                    <MobileMenu menuItems={headerArray}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 14px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    max-width: 100vw;
`

const StyledName = styled.span`
    font-family: "Comfortaa", sans-serif;;
    font-weight: 700;
    font-size: 22px;
    color: ${theme.colors.fontMain};
`
