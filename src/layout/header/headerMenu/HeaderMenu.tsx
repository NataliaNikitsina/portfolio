import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-scroll";

export const HeaderMenu = (props: { menuItems: Array <{title:string, href: string}> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return (<ListItem key={i}> <NavLink
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-60}
                        to={item.href}>
                        {item.title}
                    </NavLink> </ListItem>)
                })}
            </ul>
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

const ListItem = styled.li`
    transition: ${theme.animations.transition};

    &:hover {
        transform: translateY(-2px) scale(1.1);
    }
`

const NavLink = styled(Link)`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: ${theme.colors.fontMain};
    cursor: pointer;

    &:active {
        transform: translateY(-2px) scale(1.1);
    }
`