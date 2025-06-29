import styled from "styled-components";
import {SocialLink} from "./SocialLink.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

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
    background: ${theme.colors.primaryBg};
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
