// import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const headerArray = [
    "About",
    "Skills",
    "Projects",
    "Contacts"
]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={headerArray}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`
