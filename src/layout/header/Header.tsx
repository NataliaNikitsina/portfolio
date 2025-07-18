import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from "react";
import  React from "react";
import {S} from "./Header_Styles.ts"

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

export const Header: React.FC = () => {
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
        <S.Header bcgColor={changedColor}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.Name onClick={ () => {scroll.scrollToTop()}}>Natalia Nikitsina</S.Name>
                    <DesktopMenu menuItems={headerArray}/>
                    <MobileMenu menuItems={headerArray}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

