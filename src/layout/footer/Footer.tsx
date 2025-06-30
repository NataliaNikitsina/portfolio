import styled from "styled-components";
import {SocialLink} from "./SocialLink.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import footerBcg from "../../assets/images/footer-bcg.svg"

const socialLinkArray = [
    "gitHubLogo",
    "linkedinLogo",
    "mailLogo",
]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align={"center"} gap={"32px"}>
                <StyledList>
                    {socialLinkArray.map(item => (<SocialLink iconId={item}/>))}
                </StyledList>
                <StyledSmall>Natalia Nikitsina 2025</StyledSmall>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: ${theme.colors.primaryBg};
    margin: 56px auto 0;
    background-image: url("${footerBcg}");
    background-size: cover;
    background-position: center;
    max-width: 1440px;
    width: 100%;
    min-height: 344px;
`
const StyledList = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
`

const StyledSmall = styled.small`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontText};
    margin-bottom: 240px;
`
