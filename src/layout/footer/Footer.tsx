// import React from 'react';
import styled from "styled-components";
import {SocialLink} from "./SocialLink.tsx";

const socialLinkArray = [
    "instagramLogo",
    "linkedinLogo",
    "mailLogo",
]

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledList>
                {socialLinkArray.map(item => (<SocialLink iconId={item}/>))}
            </StyledList>
            <StyledSmall>Natalia Nikitsina</StyledSmall>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
const StyledList = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
   padding: 0;
`

const StyledSmall = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
`
