import styled from "styled-components";
import {SocialLink} from "./SocialLink.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import footerBcg from "../../assets/images/footer-bcg.svg"
import {Container} from "../../components/Container.ts";

const socialLinkArray = [
    "gitHubLogo",
    "linkedinLogo",
    "mailLogo",
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align={"center"} gap={"32px"}>
                    <StyledList>
                        {socialLinkArray.map(item => (<SocialLink iconId={item}/>))}
                    </StyledList>
                    <StyledSmall>Natalia Nikitsina 2025</StyledSmall>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
    background-color: ${theme.colors.primaryBg};
    
    ${Container} {
        min-height: 335px;
        background-image: url("${footerBcg}");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
    }

    @media ${theme.media.mobile} {
        min-height: 280px;
    }
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
`
