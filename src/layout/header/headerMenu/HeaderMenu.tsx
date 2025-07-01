import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return (<ListItem key={i}> <Link href="">{item}</Link> </ListItem>)
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
    transition: transform 2ms 1ms;

    &:hover {
        transform: translateY(-2px) scale(1.1);
    }
`

const Link = styled.a`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: ${theme.colors.fontMain};
`