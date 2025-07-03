import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/images/main.png"
import {textArray} from "../../../components/textArray.ts";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Photo} from "./Photo.ts";
import {StyledHello} from "./StyledHello.ts";
import {StyledName} from "./StyledName.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <h1>Software Developer</h1>
                <FlexWrapper direction="column" gap="32px">
                    <FlexWrapper direction="column">
                        <StyledHello>Hello, my name is</StyledHello>
                        <StyledName>Natalia Nikitsina</StyledName>
                    </FlexWrapper>
                    <p>{textArray[0]}</p>
                    <FlexWrapper gap="20px">
                        <StyledLinkBtn href='/'>Projects</StyledLinkBtn>
                        <StyledLinkBtn href='/'>LinkedIn</StyledLinkBtn>
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
        margin-bottom: 110px;
    }

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }

    ${Container} {
        position: relative;

        @media ${theme.media.large} {
            h1 {
                margin-top: 690px;
                font-size: 28px;
                text-align: center;
            }
        }

        @media ${theme.media.tablet} {
            h1 {
                margin-top: 620px;
            }
        }

        @media ${theme.media.mobile} {
            h1 {
                margin-top: 460px;
                font-size: 20px;
                text-align: start;
            }
        }

        ${FlexWrapper} {
            max-width: 508px;
            width: 100%;
            
            ${StyledLinkBtn} {
                max-width: 115px;
                width: 100%;
                min-height: 43px;
                border-radius: 8px;
                background-color: ${theme.colors.accent};

                & + ${StyledLinkBtn} {
                    border: 2px solid ${theme.colors.fontMain};
                    background-color: transparent;
                }
            }

            @media screen and (max-width: 1230px) {
                max-width: 430px;
            }
            
            @media ${theme.media.large} {
                margin: 0 auto;
                max-width: 760px;
                
                p {
                    font-size: 24px;
                }

                &:first-child {
                    flex-direction: row;
                }

                &:nth-child(3) {
                    justify-content: space-evenly;
                    
                    ${StyledLinkBtn} {
                        max-width: 250px;
                        text-align: center;
                        font-size: 22px;
                    }
                }
            }

            @media ${theme.media.tablet} {
                max-width: 650px;
                &:first-child {
                    flex-direction: column;
                }
            }

            @media ${theme.media.mobile} {
                align-items: start;

                &:nth-child(3) {
                    justify-content: start;
                    ${StyledLinkBtn} {
                        max-width: 115px;
                        min-height: 43px;
                        font-size: 18px;
                    }
                }
            }
        }
        
    }
`


