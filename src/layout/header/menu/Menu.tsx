import {Link} from "react-scroll";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import React from "react";

type MenuPropsType = {
    menuItems: Array<{ title: string; href: string }>
    onClick?: () => void;
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <ul>
            {props.menuItems.map((item, i) => {
                return (<ListItem key={i}>
                    <NavLink
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-60}
                    onClick={props.onClick}
                    to={item.href}>{item.title}
                </NavLink> </ListItem>)
            })}
        </ul>
    );
};

const ListItem = styled.li`
    transition: ${theme.animations.transition};
    
    &:hover {
        transform: translateY(-2px) scale(1.2);
    }
`

const NavLink = styled(Link)`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: ${theme.colors.fontMain};
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
    
    &.active {
        transform: translateY(-2px) scale(1.1);
    }
`

