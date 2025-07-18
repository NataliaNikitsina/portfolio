import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {useState} from "react";
import {Menu} from "../menu/Menu.tsx";
import React from "react";

export const MobileMenu: React.FC<{ menuItems: Array<{title:string, href: string}> }> = (props: { menuItems: Array<{title:string, href: string}> }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerBtnClick = () => {setMenuIsOpen (!menuIsOpen);};

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}
                      onClick={() => {setTimeout(onBurgerBtnClick, 300)}}/>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    height: 30px;
    width: 30px;
    z-index: 9999999;
    top: 16px;
    right: 25px;
    
    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.fontMain};
        
        position: absolute;
        top: 16px;
        right: 0;
        bottom: 16px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontMain};
            transform: translateY(-7px);

            position: absolute;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0px) rotate(-45deg);
        `}
        }
        
        &::after { content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontMain};
            transform: translateY(7px);

            position: absolute;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0px) rotate(45deg);
        `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.accent};
    
    transform: translateY(-100%);
    transition: 0.6s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        list-style: none;
        
        transition: ${theme.animations.transition};
    }
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        
        transform: translateY(0);
        
        & ul {
            gap: 50px;
        }
    `}
    
`
