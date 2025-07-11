import styled, {css} from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from "react";

const headerArray = [
    {
        title: "About",
        href: "about",
    },
    {
        title: "Skills",
        href: "skills",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contacts",
        href: "contacts",
    },
]

export const Header = () => {
    const [changedColor, setChangedColor] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setChangedColor(true)
            } else {
                setChangedColor(false)
            }
        });
    }, [])


    return (
        <StyledHeader bcgColor={changedColor}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledName onClick={ () => {scroll.scrollToTop()}}>Natalia Nikitsina</StyledName>
                    <HeaderMenu menuItems={headerArray}/>
                    <MobileMenu menuItems={headerArray}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header<{bcgColor: boolean}>`
    padding: 14px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    max-width: 100vw;

    ${props => props.bcgColor && css<{bcgColor: boolean}>`
                background-color: ${theme.colors.accent};
        `}
`

const StyledName = styled.span`
    font-family: "Comfortaa", sans-serif;;
    font-weight: 700;
    font-size: 22px;
    color: ${theme.colors.fontMain};
    cursor: pointer;
`
