import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/images/main.png"
import photoBcg from "../../../assets/images/main-bg.svg"
import photoBcgSmall from "../../../assets/images/main-bg-small.svg"
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
    margin-bottom: 350px;

    @media ${theme.media.tablet} {
        margin-bottom: 100px;
    }

    ${Container} {
        position: relative;

        @media ${theme.media.tablet} {
            h1 {
                margin-top: 690px;
                font-size: 28px;
                text-align: center;
            }
        }

        ${FlexWrapper} {
            max-width: 508px;
            width: 100%;

            ${StyledLinkBtn} {
                max-width: 117px;
                width: 100%;
                min-height: 43px;
                border-radius: 8px;
                background-color: ${theme.colors.accent};

                & + ${StyledLinkBtn} {
                    border: 2px solid ${theme.colors.fontMain};
                    background-color: transparent;
                }
            }

            @media ${theme.media.tablet} {
                margin: 0 auto;
                max-width: 600px;
                
                p {
                    font-size: 22px;
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
        }
        
    }
`
// const PhotoWrapper = styled.div`
//     background-image: url("${photoBcg}");
//     background-repeat: no-repeat;
//     background-position: 0 100%;
//     max-width: 777px;
//     width: 100%;
//     min-height: 630px;
//
//     position: absolute;
//     top: 0;
//     right: -105px;
//
//     @media ${theme.media.tablet} {
//         background-image: url("${photoBcgSmall}");
//         max-width: 345px;
//         min-height: 395px;
//         left: 0;
//         top: 0;
//     }
// `

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
    mask-position: 0 100%;

    @media ${theme.media.tablet} {
        left: 0;
        right: 0;
        bottom: 0;
    }
    
    @media ${theme.media.mobile} {
        min-width: 450px;
        mask-image: url("${photoBcgSmall}");
        left: 0;
        right: 0;
        bottom: 0;
    }
`

const StyledHello = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 56px;
    color: #333;
    text-align: left;

    @media ${theme.media.tablet} {
        font-size: 50px;
    }
    
    span {
        position: relative;
        z-index: 0;
        display: inline-block;

        @media ${theme.media.tablet} {
            text-align: end;
            width: 100%;
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
                text-align: end;
                width: 63%;
                right: 0;
            }
        }
    }
`