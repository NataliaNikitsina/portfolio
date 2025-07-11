import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from "react";
import {theme} from "../../styles/Theme.ts";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        });
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"goToTop"} width={"16px"} height={"15px"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};
const StyledGoTopBtn = styled.button`
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    color: ${theme.colors.secondaryBg};
    background-color: ${theme.colors.accent};
    border-radius: 8px;
`