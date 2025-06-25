import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return (<ListItem key={i}><Link href="">
                        {item}
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                    </Link></ListItem>)
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
`

const Link = styled.a`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color:transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid greenyellow;
    color: ${theme.colors.fontMain};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 2px;
        height: 2em;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: -2px;
        left: 50%;
        right: 0;
        z-index: 1;
        
        transform: scale(0);
    }
    
    &:hover {
        &::before {
            transform: scale(1) skewX(-50deg);
        }
        
        ${Mask} {
            transform: skewX(10deg) translateX(-2px);
            color: ${theme.colors.accent};
            
            & + ${Mask} {
                transform: skewX(10deg) translateX(2px);
            }
        }
    }
`