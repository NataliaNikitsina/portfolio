import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/images/main.png"
import photoBcg from "../../../assets/images/main-bg.svg"
import {textArray} from "../../../components/textArray.ts";
import {StyledLinkBtn} from "../../../components/StyledLinkBtn.ts";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                    <h1>Software Developer</h1>
                    <FlexWrapper direction="column" gap="32px">
                        <StyledHello>Hello, my name is <span>Natalia Nikitsina</span></StyledHello>
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
                margin-top: 650px;
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
            
            @media ${theme.media.large} {
                margin: 0 auto;
                max-width: 760px;
                align-items: center;
                
                p {
                    font-size: 24px;
                }

                ${FlexWrapper} {
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
            }

            @media ${theme.media.mobile} {
                align-items: start;

                ${FlexWrapper} {
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

const Photo = styled.img`
    max-width: 777px;
    width: 100%;
    background-color: ${theme.colors.accent};
    object-fit: cover;

    position: absolute;
    top: 0;
    right: -105px;
    
    mask-image: url("${photoBcg}");
    mask-repeat: no-repeat;
    mask-position: left bottom;

    @media screen and (max-width: 1440px) {
        max-width: 720px;
    }

    @media screen and (max-width: 1100px) {
        max-width: 650px;
        right: -120px;
    }
    
    @media ${theme.media.large} {
        max-width: 800px;
        right: 0;
        top: -40px;
    }

    @media ${theme.media.tablet} {
        min-height: 650px;
        top: -20px;
        left: 0;
    }
    
    @media ${theme.media.mobile} {
        mask-size: 486px 550px;
        min-height: 395px;
        top: 0;
    }
`

const StyledHello = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #333;
    text-align: left;
    
    @media ${theme.media.large} {
        font-size: 46px;
        text-align: center;
    }
    
    @media ${theme.media.tablet} {
        text-align: left;
    }

    @media ${theme.media.mobile} {
        font-size: 39px;
    }
    
    span {
        position: relative;
        z-index: 0;
        display: inline-block;

        @media ${theme.media.tablet} {
            text-align: end;
            width: 100%;
        }

        @media ${theme.media.mobile} {
            text-align: start;
        }
        
        &::before {
            content: "";
            display: inline-block;
            border-radius: 8px;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;

            @media ${theme.media.tablet} {
                width: 50%;
                right: 0;
            }

            @media ${theme.media.mobile} {
                display: none;
            }
        }
    }
`