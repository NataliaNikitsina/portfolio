import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Menu} from "../menu/Menu.tsx";
import React from "react";

export const DesktopMenu:React.FC<{ menuItems: Array<{ title: string; href: string }> }> = (props: { menuItems: Array<{ title: string; href: string }> }) => {
    return (
        <StyledHeaderMenu>
            <Menu menuItems={props.menuItems}/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`