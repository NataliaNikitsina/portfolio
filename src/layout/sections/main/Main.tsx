import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {textArray} from "../../../components/textArray.ts";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {StyledHello} from "./StyledHello.ts";
import {StyledName} from "./StyledName.ts";
import Typewriter from 'typewriter-effect';
import photo from "../../../assets/images/main.png"
import {Photo} from "./Photo.ts";
// import Tilt from "react-parallax-tilt";

export const Main = () => {
    return (
        <StyledMain id={"about"}>
            <Container>
                <h1>
                    <p>Software Developer</p>
                    <Typewriter
                        options={{
                            strings: ['Software Developer',],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <FlexWrapper direction="column" gap="32px">
                    <FlexWrapper direction="column">
                        <StyledHello>Hello, my name is</StyledHello>
                        <StyledName>Natalia Nikitsina</StyledName>
                    </FlexWrapper>
                    <p>{textArray[0]}</p>
                    <FlexWrapper gap="20px">
                        <StyledLinkBtn href='/' bcgColor={theme.colors.accent}>Projects</StyledLinkBtn>
                        <StyledLinkBtn href='/' border={theme.button.border}>LinkedIn</StyledLinkBtn>
                    </FlexWrapper>
                </FlexWrapper>
                <Photo src={photo} alt="main-photo"/>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    margin-bottom: 250px;

    @media ${theme.media.large} {
        margin-bottom: 150px;
    }

    @media ${theme.media.tablet} {
        margin-bottom: 90px;
    }

    ${Container} {
        position: relative;
        
        h1 {
            p {
                display: none;
            }
        }

        @media screen and (min-width: 576px) and (max-width: 992px) {
            h1 {
                margin-top: 730px;
                font-size: 28px;
                text-align: center;
            }
        }

        @media ${theme.media.mobile} {
            h1 {
                margin-top: 450px;
            }
        }

        ${FlexWrapper} {
            max-width: 508px;
            width: 100%;

            p {
                font-size: 24px;
            }
            
            ${StyledLinkBtn} {
                max-width: 115px;
                width: 100%;
                min-height: 43px;
                border-radius: 8px;
            }
            
            @media ${theme.media.large} {
                margin: 0 auto;
                max-width: 760px;
            }

            @media screen and (min-width: 576px) and (max-width: 992px) {
                align-items: center;

                &:last-child {
                    justify-content: space-evenly;

                    ${StyledLinkBtn} {
                        max-width: 250px;
                        text-align: center;
                        font-size: 22px;
                    }
                }
            }
        }
    }
`


